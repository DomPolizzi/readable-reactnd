import React from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

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
      <Button fab color="primary">
        <AddIcon />
      </Button>
    </div>
  );
};

export default AddPostButton;
