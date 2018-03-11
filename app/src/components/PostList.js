import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import {
  Edit,
  DeleteForever,
  ArrowUpward,
  ArrowDownward
} from 'material-ui-icons';

const PostList = ({ posts,handleDelete }) => {
  return (
    <List>
      {posts &&
        posts.length > 0 &&
        posts.map((post, i) => (
          <div key={i}>
            <ListItem divider>
              <div>
                <ArrowUpward />
                <div style={{ textAlign: 'center' }}>{post.voteScore}</div>
                <ArrowDownward />
              </div>
              <ListItemText
                primary={post.title}
                secondary={`Author: ${post.author} - Comments: ${post.numComments}`}
              />
            <Edit />
            <DeleteForever onClick={() => handleDelete(post)} />
            </ListItem>
          </div>
        ))}
    </List>
  );
};

export default PostList;
