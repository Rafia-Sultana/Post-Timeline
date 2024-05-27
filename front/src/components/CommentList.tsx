import { List, ListItem, ListItemText } from '@mui/material';
import { CommentListI } from '../Interfaces/CommentList';


const CommentList: React.FC<{comments:CommentListI}> = ({ comments }) => (
  <List>
    {comments.map((comment) => (
      <ListItem key={comment.id}>
        <ListItemText primary={comment.body} secondary={comment.email} />
      </ListItem>
    ))}
  </List>
);

export default CommentList;
