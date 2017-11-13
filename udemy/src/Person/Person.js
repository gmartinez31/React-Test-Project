import React from 'react';
import './Person.css';
// {} anything inside these braces react interprets as actual js not literal 'html'(jsx) so the input is dynamic rather than static

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};
// same as:
// const person = function () {
    
// }

export default person;