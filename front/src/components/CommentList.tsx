import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { CommentListI } from '../Interfaces/CommentList';
import Divider from '@mui/material/Divider';
const CommentList: React.FC<{ comments: CommentListI[] }> = ({ comments }) => {
  if (!comments) return <Typography>Loading Comments....</Typography>;

  return (
    <List>
      {comments.map((comment) => (
      <>
        <ListItem key={comment.id}>
          <ListItemText primary={comment.body} secondary={comment.email} />
      
        </ListItem>
         <Divider/></>
      ))}
    </List>
  );
};

export default CommentList;