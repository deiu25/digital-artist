import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import axios from 'axios';

interface PostItemProps {
  post: {
    id: number;
    title: string;
    description: string;
    clientUrl: string;
    status: string;
    imagePath?: string;
  };
  onStatusChange: (id: number, newStatus: string) => void;
  onDelete: (id: number) => void;
  onEdit: (updatedPost: any) => void; 
}

export const PostItem: React.FC<PostItemProps> = ({ post, onStatusChange, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editablePost, setEditablePost] = useState(post);
  const [openDialog, setOpenDialog] = useState(false);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditablePost({
      ...editablePost,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = async () => {
    try {
      const response = await axios.patch(`http://localhost:3000/portfolio/${post.id}`, {
        title: editablePost.title,
        description: editablePost.description,
        clientUrl: editablePost.clientUrl,
        status: editablePost.status,
      });
      setIsEditing(false);
      onEdit(response.data); 
      onStatusChange(post.id, editablePost.status);
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };

  const toggleStatus = async () => {
    const newStatus = post.status === 'visible' ? 'hidden' : 'visible';
    try {
      await axios.patch(`http://localhost:3000/portfolio/${post.id}`, { status: newStatus });
      onStatusChange(post.id, newStatus);
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/portfolio/${post.id}`);
      onDelete(post.id); 
      setOpenDialog(false); 
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  return (
    <Card sx={{ display: 'flex', mb: 3, boxShadow: 3 }}>
      {post.imagePath && (
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={`http://localhost:3000/${post.imagePath.replace(/\\/g, '/')}`}
          alt={post.title}
        />
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          {isEditing ? (
            <>
              <TextField
                label="Title"
                name="title"
                value={editablePost.title}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Description"
                name="description"
                value={editablePost.description}
                onChange={handleChange}
                fullWidth
                multiline
                rows={2}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Client URL"
                name="clientUrl"
                value={editablePost.clientUrl}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
            </>
          ) : (
            <>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {post.description}
              </Typography>
              <Button
                href={post.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Visit Source
              </Button>
            </>
          )}

          <Box sx={{ mt: 2 }}>
            {isEditing ? (
              <Button variant="contained" color="success" onClick={saveChanges} sx={{ mr: 1 }}>
                Save
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={toggleEdit} sx={{ mr: 1 }}>
                Edit
              </Button>
            )}
            <Button onClick={() => setOpenDialog(true)} variant="outlined" color="error">
              Delete
            </Button>
          </Box>
        </CardContent>

        <Box sx={{ p: 2 }}>
          <Typography variant="caption" color={post.status === 'visible' ? 'green' : 'red'}>
            {post.status === 'visible' ? 'Visible' : 'Hidden'}
          </Typography>
          <Button onClick={toggleStatus} variant="outlined" sx={{ mt: 1 }}>
            {post.status === 'visible' ? 'Hide' : 'Show'}
          </Button>
        </Box>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this post? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};
