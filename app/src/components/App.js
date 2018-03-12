import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContainer from './ListContainer';
import PostDetail from './PostDetail';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ListContainer} />
        <Route path="/:category/:postId" component={PostDetail} />
      </div>
    );
  }
}

export default App;
