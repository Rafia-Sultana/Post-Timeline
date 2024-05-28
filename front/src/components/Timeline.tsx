import React from 'react';
import useFetch from '../hooks/useFetch';
import Post from './Post';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { API_URLS } from '../constants';
import { PostI } from '../Interfaces/Post';
import { UserI } from '../Interfaces/User';
import '../assets/Styles/Timeline.css'

const Timeline: React.FC = () => {
    const { data: posts, loading: postsLoading, error: postsError } = useFetch<PostI[]>(API_URLS.POSTS);
    const { data: users, loading: usersLoading, error: usersError } = useFetch<UserI[]>(API_URLS.USERS);
    

  if (postsLoading || usersLoading) return <CircularProgress />;
  if (postsError || usersError) return <Typography>Error loading data</Typography>;


  if(!users) return <Typography>Loading Users....</Typography>
  if(!posts) return <Typography>Loading Posts....</Typography>
  
  const userMap = users.reduce((acc: any, user: any) => {
    acc[user.id] = user;
    return acc;
  }, {});

  return (
    <Container className='timeline-container'>
      {posts
        .sort((a: any, b: any) => b.id - a.id)
              .map((post: any, index) => (
                <div key={post.id} className={`stop ${index % 2 === 0 ? '' : 'even'} `}>
                <Box className="box" >
                  <Post post={post} user={userMap[post.userId]} />
                </Box>
       </div>  
        ))}
    </Container>
  );
};

export default Timeline;
