import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { v4 } from 'uuid';

class CommentForm extends Component {
  state = {
    author: '',
    body: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    const { post, addComment } = this.props;
    const newComment = {
      id: v4(),
      parentId: post.id,
      timestamp: Date.now(),
      author: this.state.author,
      body: this.state.body
  };

  addComment(newComment);
  this.setState({ author: '', body: '' });
};

  render() {
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
            style={{  maxWidth: 400, marginBottom: 20 }}
            type="submit"
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
