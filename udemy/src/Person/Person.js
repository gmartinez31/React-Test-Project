import React from 'react';

// {} anything inside these braces react interprets as actual js not literal 'html'(jsx) so the input is dynamic rather than static

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};
// same as:
// const person = function () {
    
// }

export default person;