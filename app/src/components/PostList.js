import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Edit, DeleteForever } from 'material-ui-icons';
import VoteScore from './VoteScore';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Card from 'material-ui/Card';
import { timeFormat } from '../utils/config';

const Content = ({ item }) => (
  <div style={{ paddingLeft: 10 }}>
    <ListItemText
      primary={
        <Link
          to={`/${item.category}/${item.id}`}
          style={{ textDecoration: 'none' }}
        >
          {item.title}
        </Link>
      }
      secondary={`${moment(item.timestamp).format(
        timeFormat
      )} - Author: ${item.author} - Comments: ${item.numComments}`}
    />
  </div>
);

const PostList = ({ items, handleDelete, handleVote }) => {
  return (
    <List>
      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div key={i}>
            <Card style={{ padding: 5, margin: 5 }}>
              <ListItem>
                <div style={{ display: 'flex', alignItems: 'center', flex: '1 1 auto' }} >
                  <VoteScore item={item} handleVote={handleVote} />
                  <Content item={item} />
                  <div style={{ flex: '1 1 auto' }} />
                  <div>
                    <Edit />
                    <DeleteForever onClick={() => handleDelete(item)} />
                  </div>
                </div>
              </ListItem>
            </Card>
          </div>
        ))}
    </List>
  );
};

export default PostList;
