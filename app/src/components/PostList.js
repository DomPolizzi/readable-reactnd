import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

const PostList = ({ posts }) => {
  return (
    <List>
      {posts &&
        posts.length > 0 &&
        posts.map((post, i) => (
          <div key={i}>
            <ListItem divider>
              <div>{post.voteScore}</div>
              <ListItemText
                primary={post.title}
                secondary={`Author: ${post.author} - Comments: ${post.numComments}`}
              />
            </ListItem>
          </div>
        ))}
    </List>
  );
};

export default PostList;
