import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { v4 } from 'uuid';
import { addComment, updateComment } from '../actions';

class CommentForm extends Component {
  state = {
    author: this.props.comment ? this.props.comment.author : '',
    body: this.props.comment ? this.props.comment.body : ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { comment, handleFinishEdit, post, updateComment, addComment } = this.props;
    if (comment) {
    const updatedComment = {
      ...comment,
      timestamp: Date.now(),
      author: this.state.author,
      body: this.state.body
    };
    updateComment(updatedComment);
    handleFinishEdit();
  } else {
    const newComment = {
      id: v4(),
      parentId: post.id,
      timestamp: Date.now(),
      author: this.state.author,
      body: this.state.body
  };

  addComment(newComment);
}
  this.setState({ author: '', body: '' });
};

  render() {
    const { comment, handleFinishEdit } = this.props;
    return (
      <div style={{ paddingLeft: 16 }}>
        <form style={{ display: 'flex', flexDirection: 'column'}}
          onSubmit={event => this.handleSubmit(event)}
          autoComplete="off"
          >
          <TextField
            required
            id="body"
            label="Comment"
            fullWidth
            multiline
            rows="4"
            value={this.state.body}
            onChange={this.handleChange('body')}
            style={{ maxWidth: 400 }}
          />
          <TextField
            required
            id="author"
            label="author"
            fullWidth
            value={this.state.author}
            onChange={this.handleChange('author')}
            style={{ maxWidth: 400, paddingTop: 10, paddingBottom: 20 }}
          />
          <Button
            raised
            color="primary"
            style={{ maxWidth: 400, marginBottom: 20 }}
            type="submit"
          >
            Save
          </Button>
          {comment && (
            <Button
              style={{ maxWidth: 400,  marginBottom: 20 }}
              onClick={handleFinishEdit}
            >
              Cancel
            </Button>
          )}
        </form>
      </div>
    );
  }
}

export default connect(null, { addComment, updateComment })(CommentForm);
