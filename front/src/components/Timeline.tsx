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

  const userMap = users.reduce((acc: any, user: any) => {
    acc[user.id] = user;
    return acc;
  }, {});

  return (
    <Container >
      {posts
        .sort((a: any, b: any) => b.id - a.id)
              .map((post: any, index) => (
                  <>
                          <Box className="box" style={{
                 
                    marginLeft: index % 2 !== 0 ? '50%' : '0',
                          marginRight: index % 2 === 0 ? '50%' : '0',
                     
                
                    
                  }}
                 >
                      <Post key={post.id} post={post} user={userMap[post.userId]} />
                  
                  </Box>
                      <div className="ring" ></div>
                  </>
       
       
        ))}
    </Container>
  );
};

export default Timeline;
