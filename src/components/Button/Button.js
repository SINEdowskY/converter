import React from 'react';

function Button(props){
    return(
    <button type={props.type}>{props.label}</button>
    );
}

Button.defaultProps = {
    label: 'Enter label for Button',
    type: 'submit'
}

export default Button;