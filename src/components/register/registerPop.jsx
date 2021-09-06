import React from 'react';
import './registerPop.scss';

function registerPop(props) {
    return (
        <div className="popup">
            <div className="popup_window">
                Their are following error encountered during registration.
                <ul>
                    {
                        props?.error?.map(prop=>(
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
