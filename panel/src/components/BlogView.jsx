import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostItem from './PostItem';

export function BlogView() {
  const [sortBy, setSortBy] = useState('latest');
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/portfolio');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleNewPost = () => {
    navigate('/create');
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/portfolio/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'visible' ? 'hidden' : 'visible';
    try {
      await axios.patch(`http://localhost:3000/portfolio/${id}`, { status: newStatus });
      setPosts(posts.map(post => post.id === id ? { ...post, status: newStatus } : post));
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Posts</h2>
        <button
          className="btn bg-gray-900 text-white hover:bg-gray-700 px-4 py-2"
          onClick={handleNewPost}
        >
          New Post
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onStatusChange={toggleStatus}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
