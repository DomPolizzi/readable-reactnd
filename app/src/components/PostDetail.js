import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import VoteScore from './VoteScore';
import Typography from 'material-ui/Typography';
import { Edit, DeleteForever } from 'material-ui-icons';
import moment from 'moment';
import { getPost, fetchComments, deletePost, votePost, voteComment, deleteComment } from '../actions';
import CommentList from './CommentList';
import { sortBy } from '../utils/sort';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';

class PostDetail extends Component {
  static propTypes = {
  post: PropTypes.object,
  comments: PropTypes.array,
  getPost: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};

  state = {
    editComment: null,
    deleted: false
  };

  componentDidMount() {
    const { postId } = this.props.match.params;
    this.props.getPost(postId);
    this.props.fetchComments(postId);
  }

  handleDelete = post => {
    this.props.deletePost(post);
    this.setState({ deleted: true });
};

  handlePostVote = (post, option) => this.props.votePost(post.id, option);

  handleCommentVote = (comment, option) =>
    this.props.voteComment(comment.id, option);

  handleCommentDelete = comment => this.props.deleteComment(comment);

  handleEditButton = comment => this.setState({ editComment: comment });

  handleFinishEdit = () => this.setState({ editComment: null });

  render() {
    const { post, comments } = this.props;
    const { editComment, deleted } = this.state;

    if (deleted) {
    return <Redirect to={'/'} />;
  }

    return (
      <div>
        {post &&(
          <div>
            <Card style={{ padding: 5, margin:5 }}>
              <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 16, paddingRight: 16}}>
                <VoteScore item={post} handleVote={this.handlePostVote} />
                <CardHeader title={post.title}
                  subheader={`Sent ${moment(post.timestamp).format(
                    'Do MMMM YYYY, h:mm a')} by ${post.author} `}/>
                <div style={{ flex: '1 1 auto' }} />
                <div>
                  <Link
                  to={`/post/edit/${post.id}`}
                  style={{ textDecoration: 'none', color: 'black' }} >
                      <Edit />
                  </Link>
                  <DeleteForever onClick={() => this.handleDelete(post)}/>
                </div>
              </div>
              <CardContent>
                <Typography paragraph>{post.body}</Typography>
              </CardContent>
            </Card>
          </div>
          )}
          {post &&
            comments && (
              <div>
                <Card style={{ padding: 5, margin: 5 }}>
                  <CommentForm post={post} />
                </Card>
                <Card style={{ padding: 5, margin: 5 }}>
                  <CardHeader title={`${post.numComments} comments`} />
                  <CommentList
                    items={comments}
                    handleVote={this.handleCommentVote}
                    handleDelete={this.handleCommentDelete}
                    handleEditButton={this.handleEditButton}
                    editComment={editComment}
                    handleFinishEdit={this.handleFinishEdit}
                    />
            </Card>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ posts, comments }, { match }) {
  return {
    post: posts.filter(post => post.id === match.params.postId)[0],
    comments: sortBy(comments[match.params.postId])
  };
}

export default connect(mapStateToProps, {
  getPost,
  fetchComments,
  deletePost,
  votePost,
  voteComment,
  deleteComment,
})(PostDetail);
