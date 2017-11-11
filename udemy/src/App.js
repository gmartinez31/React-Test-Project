import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

class App extends Component {
  render() {
    // good practice to wrap everything under one root element per component used //
    return (
      <div className="App">
        <h1>First React App</h1>
        <Person name='Gustavo' age='26' />
        <Person name='Imelda' age='25' />
        <Person name='Cris' age='19' />
        <Person name='Freddy' age='18' />
      </div>
    );

    // or
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'First React App!'))

  }
}

export default App;
