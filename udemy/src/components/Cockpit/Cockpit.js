import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';


const cockpit = (props) => {
    let btnClass = classes.Button;
    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    // here we are simply stating classes to be used dynamically. when 'classes' obj is assigned to a classname, red and bold classes are assigned.
    // let classes = ['red', 'bold'].join(' ')

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }


    return (
        <Aux>
            <h1>{ props.appTitle } </h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            {/* binding this means we want the 'this' in the switchnamehandler so we literally add .bind afterwards with whatever we want to bind from that specific thing. In this case we wanted the this from that handler. */ }
            {/* ...{this.swit..er.bind(this)} */ }
            {/* vs. */ }
            {/* However we can also pass swi... as an anonymous function that will be called on the onClick */ }
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </Aux>

        // {/* in this case 'this' refers to the class */ }
        // {/* YOU can pass methods as props so you can call methods */ }
        // {/* { this.state.showPersons ? */ }
        // {/* // look up above at  ^ That is ternary operator that's basically a shortcut for the if/else statment //  */ }
        // {/* <div className=''>
        //       <Person
        //         name={this.state.persons[0].name}
        //         age={this.state.persons[0].age}
        //         click={this.switchNameHandler} />
        //       <Person
        //         name={this.state.persons[1].name}
        //         age={this.state.persons[1].age}
        //         click={this.switchNameHandler}
        //         changed={this.nameChangedHandler} />
        //       <Person
        //         name={this.state.persons[2].name}
        //         age={this.state.persons[2].age}
        //         click={this.switchNameHandler} >Hobbies: Music, Lifting, and Running</Person>
        //       <Person
        //         name={this.state.persons[3].name}
        //         age={this.state.persons[3].age}
        //         click={this.switchNameHandler} />
        //     </div> */}
    );
}

export default cockpit