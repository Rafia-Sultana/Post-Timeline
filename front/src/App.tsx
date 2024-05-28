
import Timeline from './components/Timeline';
import { Container, CssBaseline, Typography } from '@mui/material';

const App: React.FC = () => (
  <Container>
    <CssBaseline />
    <Typography variant="h2" gutterBottom>
    Timeline
    </Typography>
    <Timeline />
  </Container>
);

export default App;
