import React, { Component } from 'react';
import classes from './Person.css';
import PropType from 'prop-types';

import WithClass from '../../../hoc/Withclass';
// {} anything inside these braces react interprets as actual js not literal 'html'(jsx) so the input is dynamic rather than static

// stateful component //
class Person extends Component {
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
        this.inputElement.focus();
    }
    
    render () {
        return (
        <WithClass classes={classes.App}>
            <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input 
                ref = { (inp) => { this.inputElement = inp} }
                type = 'text' 
                onChange = { this.props.changed }
                value = { this.props.name }
            />
        </WithClass>
    )}
}

Person.propType = {
    click : PropType.func,
    name : PropType.string,
    age : PropType.number,
    changed : PropType.func
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