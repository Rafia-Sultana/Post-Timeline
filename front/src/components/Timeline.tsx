
import React from 'react';
import useFetch from '../hooks/useFetch';
import Post from './Post';
import { CircularProgress, Container, Typography } from '@mui/material';
import { API_URLS } from '../constants';
import { PostI } from '../Interfaces/Post';
import { UserI } from '../Interfaces/User';

const Timeline: React.FC = () => {
    const { data: posts, loading: postsLoading, error: postsError } = useFetch<PostI[]>(API_URLS.POSTS);
    const { data: users, loading: usersLoading, error: usersError } = useFetch<UserI[]>(API_URLS.USERS);
    

  if (postsLoading || usersLoading) return <CircularProgress />;
  if (postsError || usersError) return <Typography>Error loading data</Typography>;

  const userMap = users.reduce((acc: any, user: any) => {
    acc[user.id] = user;
    return acc;
  }, {});

  return (
    <Container>
      {posts
        .sort((a: any, b: any) => b.id - a.id)
        .map((post: any) => (
          <Post key={post.id} post={post} user={userMap[post.userId]} />
        ))}
    </Container>
  );
};

export default Timeline;
