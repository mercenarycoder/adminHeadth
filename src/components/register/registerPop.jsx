import React from 'react';
import './registerPop.scss';

function registerPop(props) {

    return (
        <div
        onClick={props.onClick} 
        className="popup" 
        style={{display:props.visible?'':'none'}}>
            <div 
            className="popup_window">
                Their are following error encountered during registration.
                <ul>
                    {
                        props?.error?.map((prop)=>(
                            <li>
                                {prop}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default registerPop;
