import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (   
        <button className={props.buttonProp.buttonStyle}>{props.buttonProp.text}</button>
    )
}

export default NumberButton