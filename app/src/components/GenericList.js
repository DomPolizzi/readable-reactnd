import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Edit, DeleteForever } from 'material-ui-icons';
import VoteScore from './VoteScore';
import { Link } from 'react-router-dom';

const GenericList = ({ items, handleDelete, handleVote }) => {
  return (
    <List>
      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div key={i}>
            <ListItem divider>
              <VoteScore item={item} handleVote={handleVote} />
              <ListItemText
                primary={
                  <Link
                    to={`/${item.category}/${item.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {item.title}
                  </Link>
                }
                secondary={`Author: ${item.author} - Comments: ${item.numComments}`}
              />
              <Edit />
              <DeleteForever onClick={() => handleDelete(item)} />
            </ListItem>
          </div>
        ))}
    </List>
  );
};

export default GenericList;
