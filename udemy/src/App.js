import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

class App extends Component {
  // state only available when 'extends Component' is used //
  state = {
    persons: [
      {name: 'Gustavo', age: 26},
      {name: 'Imelda', age: 25},
      {name: 'Baby', age: 19},
      {name: 'Freddy', age: 18},
    ]
  }

  // property or method of the App class //
  switchNameHandler = () => {
    // console.log('Clicked bruh.');
    // DONT DO THIS -> this.state.persons[0].name = 'Blah'
    
    // with setState React will recoginze the change
    this.setState({persons: 
      [
        { name: 'Gustavo', age: 26 },
        { name: 'Imelda', age: 25 },
        { name: 'Cris', age: 19 },
        { name: 'Freddy', age: 200 },
      ]
    });
  }

  render() {
    // good practice to wrap everything under one root element per component used //
    return (
      <div className="App">
        <h1>First React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {/* in this case 'this' refers to the class */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Music, Lifting, and Running</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    );

    // or
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'First React App!'))

  }
}

export default App;
