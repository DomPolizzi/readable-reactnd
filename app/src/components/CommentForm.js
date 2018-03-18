import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class CommentForm extends Component {
  state = {
    id: null,
    parentId: null,
    timestamp: null,
    author: '',
    body: '',
    voteScore: 0,
    deleted: false,
    parentDeleted: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Submit!');
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
