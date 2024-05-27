// src/App.tsx
import React from 'react';
import Timeline from './components/Timeline';
import { Container, CssBaseline, Typography } from '@mui/material';

const App: React.FC = () => (
  <Container>
    <CssBaseline />
    <Typography variant="h2" gutterBottom>
      Forum Timeline
    </Typography>
    <Timeline />
  </Container>
);

export default App;
