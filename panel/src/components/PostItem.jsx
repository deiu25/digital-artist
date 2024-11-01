import { useState } from 'react';

const PostItem = ({ post, onStatusChange, onDelete, onEdit }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    onDelete(post.id); 
    setShowDeleteDialog(false); 
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false); 
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {post.imagePath && (
        <img
          src={`http://localhost:3000/${post.imagePath}`}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <p className="text-gray-600">{post.description}</p>

        <button className="mt-4 text-blue-500" onClick={() => onEdit(post.id)}>
          Edit
        </button>

        <button className="ml-4 text-red-500" onClick={handleDeleteClick}>
          Delete
        </button>

        <button
          className={`ml-4 px-3 py-1 rounded ${
            post.status === 'visible' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
          }`}
          onClick={() => onStatusChange(post.id, post.status)}
        >
          {post.status === 'visible' ? 'Visible' : 'Hidden'}
        </button>
      </div>

      {showDeleteDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Are you sure?</h3>
            <p className="mb-6">Do you really want to delete this post? This action cannot be undone.</p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostItem;
