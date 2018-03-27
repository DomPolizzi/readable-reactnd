import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchPosts, fetchCategories, orderBy, deletePost, votePost} from '../actions';
import PostList from './PostList';
import { baseCategory } from '../utils/config';
import CategoryBar from './CategoryBar';
import { sortBy } from '../utils/sort';

class ListContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  handleOrderChange = event => this.props.orderBy(event.target.value);
  handleDelete = post => this.props.deletePost(post);
  handlePostVote = (post, option) => this.props.votePost(post.id, option);

  render() {
    const { posts, categories, order } = this.props;
    return (
      <div>
        <CategoryBar
          order={order}
          categories={categories}
          handleOrderChange={this.handleOrderChange}
          />
          {categories &&
              categories.length > 0 &&
              categories.map((category, i) => (
                <Route
                  exact path={`/${category.path}`}
                  key={i}
                  render={() => (
              <PostList items={ category.path === baseCategory.path ? posts
                       : posts.filter(post => post.category === category.path)
                      }
                    handleVote={this.handlePostVote}
                    handleDelete={this.handleDelete}
                    />
                  )}
                />
            ))}
          </div>
        );
      }
    }

    function mapStateToProps({ posts, categories, order }) {
      return {
        posts: sortBy(posts, order),
        categories,
        order
      };
    }

    export default connect(mapStateToProps, {
      fetchPosts,
      fetchCategories,
      orderBy,
      deletePost,
      votePost
    })(ListContainer);
