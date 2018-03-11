import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchPosts, fetchCategories, orderBy, deletePost } from '../actions';
import PostList from './PostList';
import { baseCategory } from '../utils/config';
import CategoryBar from './CategoryBar';
import { sortBy } from '../utils/sort';
import { AddCircle } from 'material-ui-icons';

class ListContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  handleOrderChange = event => this.props.orderBy(event.target.value);

  render() {
    const { posts, categories, order } = this.props;
    return (
      <div>
        <CategoryBar
          order={order}
          categories={categories}
          handleOrderChange={this.handleOrderChange}/>
            {categories &&
              categories.length > 0 &&
              categories.map((category, i) => (
                <Route
                  exact path={`/${category.path}`}
                  key={i}
                  render={() => (
                    <PostList
                      posts={
                        category.path === baseCategory.path ? (
                        posts
                      ) : (
                        posts.filter(post => post.category === category.path)
                      )}
                    handldDelete={this.handldDelete}
                    />
                  )}
                />
            ))}
            <AddCircle
              style={{
                position: 'fixed',
                right: 20,
                bottom: 20,
                width: 40,
                height:40,
                fill: '#008000'
              }}
            />
          </div>
        );
      }
    }

    function mapStateToProps({ posts, categories, order }) {
      return {
        posts: sortBy(order, posts),
        categories,
        order
      };
    }

    export default connect(mapStateToProps, {
      fetchPosts,
      fetchCategories,
      orderBy,
      deletePost
})(ListContainer);
