import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContainer from './ListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ListContainer} />
      </div>
    );
  }
}

export default App;
