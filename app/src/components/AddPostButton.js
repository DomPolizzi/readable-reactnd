import React from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { Link } from 'react-router-dom';

const AddPostButton = () => {
  return (
    <div
      style={{
        position: 'fixed',
        right: 25,
        bottom: 25,
        width: 50,
        height: 50,
        fill: '#3f51b5'
      }}
    >
      <Link to={`/post/new`} style={{ textDecoration: 'none' }}>
        <Button fab color="primary">
          <AddIcon />
        </Button>
      </Link>
    </div>
  );
};

export default AddPostButton;
