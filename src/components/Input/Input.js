import React from 'react';

function Input({eventSet}) {
    return(
        <input type="number" placeholder="Amount" onChange={ (event) => { eventSet(event.target.value); } }/>
    );
}

export default Input;