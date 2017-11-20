import React from 'react';

const withClass = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
)

// or

// this is a normal js function which then returns a functional component
// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className = {className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }


export default withClass;