import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/Withclass';

// JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('works', props);
    // you can also initialize state here with this.state but below works fine too //
  }

  componentWillMount() {
    console.log('cwm');
  }

  componentDidMount() {
    console.log('cdm');
  }

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
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
          persons = {this.state.persons}
          clicked = {this.deleteNameHandler}
          changed = {this.nameChangedHandler}/>;
    }


    // good practice to wrap everything under one root element per component used //
    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle = {this.props.title} 
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}/>
        {persons}
      </WithClass>
    );

    // or
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'First React App!'))

  }
}

export default App;

// Remember, the container (app.js), manages the state and manipulates the state with handler methods //
