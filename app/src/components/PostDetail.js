import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostDetail extends Component {
  render() {
    const { post } = this.props;
    return <div>{post && `Hello ${post.id} from ${post.category}`}</div>;
  }
}

function mapStateToProps({ posts }, { match }) {
  return {
    post: posts.filter(post => post.id === match.params.postId)[0]
  };
}

export default connect(mapStateToProps)(PostDetail);
