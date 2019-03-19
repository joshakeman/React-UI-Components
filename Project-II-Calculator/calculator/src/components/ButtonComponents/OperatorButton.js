import React from 'react';
import './Button.css';

function OperatorButton(props) {
    return <button className={props.buttonProp.buttonStyle}>{props.buttonProp.text}</button>
}

export default OperatorButton