import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <div>
            <button className="btn" onClick={props.onClick}>{props.text}</button>
        </div>
    )
}
