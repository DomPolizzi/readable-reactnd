import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContainer from './ListContainer';
import PostDetail from './PostDetail';
import AddPostButton from './AddPostButton';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ListContainer} />
        <Route exact path="/" component={AddPostButton} />
        <Route exact path="/:category" component={AddPostButton} />
        <Route path="/:category/:postId" component={PostDetail} />
      </div>
    );
  }
}

export default App;
