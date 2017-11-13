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
  switchNameHandler = (newName) => {
    // console.log('Clicked bruh.');
    // DONT DO THIS -> this.state.persons[0].name = 'Blah'
    
    // with setState, React will recoginze the change
    this.setState({persons: 
      [
        { name: newName, age: 26 },
        { name: 'Imelda', age: 25 },
        { name: 'Cris', age: 19 },
        { name: 'Freddy', age: 200 },
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:
        [
          { name: 'Gustavo', age: 26 },
          { name: event.target.value, age: 25 },
          { name: 'Cris', age: 19 },
          { name: 'Freddy', age: 200 },
        ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'ghostwhite',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    // good practice to wrap everything under one root element per component used //
    return (
      <div className="App">
        <h1>First React App</h1>
        {/* binding this means we want the 'this' in the switchnamehandler so we literally add .bind afterwards with whatever we want to bind from that specific thing. In this case we wanted the this from that handler. */}
        {/* ...{this.swit..er.bind(this)} */}
        {/* vs. */}
        {/* However we can also pass swi... as an anonymous function that will be called on the onClick */}
        <button
          style = {style}
          onClick = { () => this.switchNameHandler('Gustavo!')}>Switch Name</button>
        {/* in this case 'this' refers to the class */}
        {/* YOU can pass methods as props so you can call methods */}
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          click = {this.switchNameHandler} />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler} 
          changed = {this.nameChangedHandler} />
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}
          click = {this.switchNameHandler} >Hobbies: Music, Lifting, and Running</Person>
        <Person 
          name = {this.state.persons[3].name} 
          age = {this.state.persons[3].age} 
          click = {this.switchNameHandler} />
      </div>
    );

    // or
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'First React App!'))

  }
}

export default App;
