import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength < 6) {
        validationMessage = 'Text too short!';
    }
    
    return(
        <div>
            <p>{validationMessage}</p>
            {/* careful with using ternaries. below is another way to do it */}
            {/* {
                props.inputLength > 6 ?
                    <p>Text long enough</p> :
                    <p>Text too short!</p>
            } */}
        </div>
    )
}

export default validation;