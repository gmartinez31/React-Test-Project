import React, { Component } from 'react';
import classes from './Person.css';
// {} anything inside these braces react interprets as actual js not literal 'html'(jsx) so the input is dynamic rather than static

// stateful component //
class Person extends Component {
    render () {
        return (
        <div className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type='text' onChange={this.props.changed} value={this.props.name}/>
        </div>
    )}
}


// stateless component //

// const person = (props) => {
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type='text' onChange={props.changed} value={props.name}/>
//         </div>
//     )
// };
// same as:
// const person = function () {
    
// }

export default Person;