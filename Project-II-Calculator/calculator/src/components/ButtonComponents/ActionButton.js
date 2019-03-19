import React from 'react';
import './Button.css';


function ActionButton(props) {
    return <div className={props.buttonProp.buttonStyle}><p>{props.buttonProp.text}</p> </div>
}

export default ActionButton