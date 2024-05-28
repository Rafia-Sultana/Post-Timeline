
import Timeline from './components/Timeline';
import { Container, CssBaseline, Typography } from '@mui/material';
import TypingEffect from './components/TypingEffect';


const App: React.FC = () => (
  <Container>
    <CssBaseline />
    <Typography variant="h3" sx={{fontFamily: "'Roboto', sans-serif" ,
    my:3}}>
<TypingEffect text={"Timeline"}></TypingEffect>
    </Typography>
    <Timeline />
  </Container>
);

export default App;
