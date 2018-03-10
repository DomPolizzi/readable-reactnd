import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchPosts, fetchCategories, orderBy } from '../actions';
import PostList from './PostList';
import { baseCategory } from '../utils/config';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { sortBy } from '../utils/sort';
import { VOTE_ORDER, TIMESTAMP_ORDER } from '../utils/config';

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
        <AppBar position="static">
          <Toolbar>
            {categories &&
              categories.length > 0 &&
              categories.map((category, i) => (
                <Link
                  to={category.path}
                  key={i}
                  style={{ textDecoration: 'none' }}
                >
                  <Button color="contrast">{category.name}</Button>
                </Link>
              ))}
            <FormControl>
              <Select
                style={{ color: 'white' }}
                value={order}
                onChange={this.handleOrderChange}
                input={<Input id="order-tag" />}
              >
                <MenuItem value={VOTE_ORDER}>Vote Score</MenuItem>
                <MenuItem value={TIMESTAMP_ORDER}>Time</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
        {categories &&
          categories.length > 0 &&
          categories.map((category, i) => (
            <Route
              exact
              path={`/${category.path}`}
              key={i}
              render={() => (
                <PostList
                  posts={
                    category.path === baseCategory.path ? (
                      posts
                    ) : (
                      posts.filter(post => post.category === category.path)
                    )
                  }
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
    posts: sortBy(order, posts),
    categories,
    order
  };
}

export default connect(mapStateToProps, {
  fetchPosts,
  fetchCategories,
  orderBy
})(ListContainer);
