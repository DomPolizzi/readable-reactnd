import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import VoteScore from './VoteScore';
import Typography from 'material-ui/Typography';
import { Edit, DeleteForever } from 'material-ui-icons';
import moment from 'moment';
import { getPost, fetchComments, deletePost } from '../actions';

class PostDetail extends Component {
  state ={
    fireRedirect: false
  };

  componentDidMount() {
  const { postId } = this.props.match.params;

  this.props.getPost(postId);
  this.props.fetchComments(postId);
}

  handleDelete = post => {
    this.props.deletePost(post);
    this.setState({ fireRedirect: true });
  };

  render() {
    const { post } = this.props;
    const { fireRedirect } = this.state;
    return (
      <div>
        {fireRedirect && <Redirect to={'/'} />}
        {post &&(
          <div>
            <Card style={{ padding: 5, margin:5 }}>
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <VoteScore item={post} handleVote={() => {}} />
                <CardHeader title={post.title} subheader={`Sent ${moment(post.timestamp).format(
                    'Do MMMM YYYY, h:mm a'
                  )} by ${post.author} `}/>
                <div style={{ flex: '1 1 auto' }} />
                <div>
                  <Edit />
                  <DeleteForever onClick={() => this.handleDelete(post)}/>
                </div>
              </div>
              <CardContent>
                <Typography paragraph>
                  Lorem Ipsum Gibberish Stufff... look up things look a whale
                </Typography>
              </CardContent>
            </Card>
          </div>
          )}
      </div>
    );
  }
}

function mapStateToProps({ posts }, { match }) {
  return {
    post: posts.filter(post => post.id === match.params.postId)[0]
  };
}

export default connect(mapStateToProps, { getPost, fetchComments, deletePost })(
  PostDetail
);
