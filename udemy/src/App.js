import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

class App extends Component {
  // state only available when 'extends Component' is used //
  state = {
    persons: [
      {id : '1', name: 'Gustavo', age: 26},
      {id : '2', name: 'Imelda', age: 25},
      {id : '3', name: 'Baby', age: 19},
      {id : '4', name: 'Freddy', age: 18},
    ],
    showPersons: false
  }

  // // property or method of the App class //
  // switchNameHandler = (newName) => {
  //   // console.log('Clicked bruh.');
  //   // DONT DO THIS -> this.state.persons[0].name = 'Blah'
    
  //   // with setState, React will recoginze the change
  //   this.setState({persons: 
  //     [
  //       { name: newName, age: 26 },
  //       { name: 'Imelda', age: 25 },
  //       { name: 'Cris', age: 19 },
  //       { name: 'Freddy', age: 200 },
  //     ]
  //   });
  // }

  deleteNameHandler = (personIndex) => {
    // fetches all the persons and assigns a const that points to it
    // we add slice to the end to copy and make a new array of the original array. for good practice //
    // const persons = this.state.persons.slice(); //or
    const persons =[...this.state.persons];
    // remove one element from array
    persons.splice(personIndex, 1);
    // we setState as the newly splice persons
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });
    const person = {
      // create a new object with spread operator to not mess with the original array. remember this makes a new array copy.
      ...this.state.persons[personIndex]
    }
    //or you can do this which simply assigns the first arg, empty obj, with the second arg.
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person; // still working with copies

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(
      {showPersons: !doesShow}
    )
  }

  render() {
    const style = {
      backgroundColor: 'ghostwhite',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div className=''>
          {/* instead of hard coding each person in the array we map the array, Persons, return each item in the array as the following */}
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              click={() => this.deleteNameHandler(index)} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })} 
        </div>
      );
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
          onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {/* in this case 'this' refers to the class */}
        {/* YOU can pass methods as props so you can call methods */}
        {/* { this.state.showPersons ? */}
            {/* // look up above at  ^ That is ternary operator that's basically a shortcut for the if/else statment //  */}
        {/* <div className=''>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler}
            changed={this.nameChangedHandler} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler} >Hobbies: Music, Lifting, and Running</Person>
          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}
            click={this.switchNameHandler} />
        </div> */}
        {persons}
        {/* } */}
      </div>
    );

    // or
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'First React App!'))

  }
}

export default App;
