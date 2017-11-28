import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // default is basename='/' so we dont need to include it. Only include basename if you have a subdirectory you want to have it under
      <BrowserRouter basename='/'>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
