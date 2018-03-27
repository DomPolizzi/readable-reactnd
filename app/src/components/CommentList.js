import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Edit, DeleteForever } from 'material-ui-icons';
import VoteScore from './VoteScore';
import moment from 'moment';
import Card from 'material-ui/Card';
import CommentForm from './CommentForm';
import { timeFormat } from '../utils/config';

const Content = ({ item }) => (
  <div style={{ paddingLeft: 10 }}>
    <ListItemText
      primary={item.body}
      secondary={`${moment(item.timestamp).format(
        timeFormat
      )} - Author: ${item.author}`}
    />
  </div>
);

const CommentList = ({
  items,
  handleDelete,
  handleVote,
  editComment,
  handleEditButton,
  handleUpdateComment,
  handleFinishEdit
}) => {
  return (
    <List>
      {items &&
        items.length > 0 &&
        items.map((item, i) => (
          <div key={i}>
            <Card style={{ padding: 5, margin: 5 }}>
              {!(editComment && editComment.id === item.id) && (
                <ListItem>
                  <div
                    style={{ display: 'flex',  alignItems: 'center',flex: '1 1 auto' }}
                  >
                    <VoteScore item={item} handleVote={handleVote} />
                    <Content item={item} />
                    <div
                      style={{ flex: '1 1 auto'  }}
                    />
                    <div>
                      <Edit onClick={() => handleEditButton(item)} />
                      <DeleteForever onClick={() => handleDelete(item)} />
                    </div>
                  </div>
                </ListItem>
              )}
              {editComment &&
                editComment.id === item.id && (
                  <CommentForm
                    comment={item}
                    handleFinishEdit={handleFinishEdit}
                  />
                )}
            </Card>
          </div>
        ))}
    </List>
  );
};

export default CommentList;
