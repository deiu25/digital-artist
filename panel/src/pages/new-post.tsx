import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, Typography } from '@mui/material';
import axios from 'axios';

const NewPost: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    clientUrl: '',
    status: 'visible',
  });
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files) {
      setImage(files[0]); 
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('clientUrl', formData.clientUrl);
      data.append('status', formData.status);
      if (image) data.append('image', image); 

      await axios.post('http://localhost:3000/portfolio', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Post created successfully!');
      setFormData({ title: '', description: '', clientUrl: '', status: 'visible' });
      setImage(null); 
    } catch (error) {
      alert('Failed to create post');
      console.error(error);
    }
  };

  return (
    <Box sx={{ width: '50%', margin: '0 auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Add New Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          variant="outlined"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Client URL"
          variant="outlined"
          name="clientUrl"
          value={formData.clientUrl}
          onChange={handleChange}
          fullWidth
          required
          type="url"
          sx={{ mb: 2 }}
        />
        <TextField
          select
          label="Status"
          variant="outlined"
          name="status"
          value={formData.status}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        >
          <MenuItem value="visible">Visible</MenuItem>
          <MenuItem value="hidden">Hidden</MenuItem>
        </TextField>
        
        <Button variant="contained" component="label" sx={{ mb: 2 }}>
          Upload Image
          <input type="file" name="image" hidden onChange={handleChange} />
        </Button>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default NewPost;
