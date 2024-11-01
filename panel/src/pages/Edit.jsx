import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

const Edit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    clientUrl: "",
    status: "visible",
  });
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/portfolio/${id}`
        );
        const { title, description, clientUrl, status, imagePath } =
          response.data;
        setFormData({ title, description, clientUrl, status });
        setCurrentImage(imagePath); 
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      setImage(files[0]); 
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('clientUrl', formData.clientUrl);
      data.append('status', formData.status);
      if (image) data.append('image', image);
  
      await axios.patch(`http://localhost:3000/portfolio/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      alert('Post updated successfully!');
      navigate('/'); 
    } catch (error) {
      alert('Failed to update post');
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="p-8 max-w-9xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Edit Post</h1>
          <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700">Client URL</label>
                <input
                  type="url"
                  name="clientUrl"
                  value={formData.clientUrl}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div>
                <label className="block text-gray-700">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="visible">Visible</option>
                  <option value="hidden">Hidden</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Current Image</label>
                {currentImage && (
                  <img
                    src={`http://localhost:3000/${currentImage}`}
                    alt="Current"
                    className="w-full h-48 object-cover mb-4"
                  />
                )}
                <label className="block text-gray-700">Upload New Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Update Post
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Edit;
