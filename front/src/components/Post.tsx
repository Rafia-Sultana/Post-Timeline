// src/components/Post.tsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import useFetch from '../hooks/useFetch';
import CommentList from './CommentList';
import { API_URLS } from '../constants';
import { PostI } from '../Interfaces/Post';
import { UserI } from '../Interfaces/User';


const Post: React.FC<{ post:PostI, user:UserI}> = ({ post, user }) => {
  const [showComments, setShowComments] = useState(false);
  const { data: comments, loading, error } = useFetch(
    `${API_URLS.COMMENTS}?postId=${post.id}`
  );

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          by {user.name}
        </Typography>
        <Typography variant="body2">{post.body}</Typography>
        <Button onClick={() => setShowComments(!showComments)}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </Button>
        {showComments && (
          <div>
            {loading ? (
              <Typography>Loading comments...</Typography>
            ) : error ? (
              <Typography>Error loading comments</Typography>
            ) : (
              <CommentList comments={comments} />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Post;
