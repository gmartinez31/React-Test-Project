import React, { Component } from 'react';
import Person from './Person/Person';

// stateful component //
class Persons extends Component {
    render () {
        return this.props.persons.map((person, index) => {
            // key always has to be on the outer most component so we move it from person to error //
            // instead of hard coding each person in the array we map the array, Persons, return each item in the array as the following //
            return <Person
                name={person.name}
                age={person.age}
                key = {person.id}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

// stateless component //
// const persons = (props) => props.persons.map((person, index) => {
//     // key always has to be on the outer most component so we move it from person to error //
//     // instead of hard coding each person in the array we map the array, Persons, return each item in the array as the following //
//         return <Person
//             name = { person.name }
//             age = { person.age }
//             click = { () => props.clicked(index) }
//             changed = { (event) => props.changed(event, person.id) } />
//     });



export default Persons;