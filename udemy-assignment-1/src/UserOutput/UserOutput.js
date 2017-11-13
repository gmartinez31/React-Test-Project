import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Hello {props.username}!</p>
            <p>Stuff stuff stuff</p>
            <br />
        </div>
    )
};

export default UserOutput;