import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Dieseas.scss';

function Dieseas() {
    return (
        <div>
            <div className="diesease_view">
                    <h2 className="diesease_view_heading">History Section</h2>
                    <ul className="diesease_view_list">
                        <li className="diesease_view_item">
                            <div className="diesease_view_item_title">Doctor visit</div>
                            <div className="diesease_view_item_options">
                                <MoreVertIcon fontSize="40" className="diesease_view_item_icon" />
                            </div>
                        </li>
                        <li className="diesease_view_item">
                            <div className="diesease_view_item_title">Doctor visit</div>
                            <div className="diesease_view_item_options">
                                <MoreVertIcon fontSize="40" className="diesease_view_item_icon" />
                            </div>
                        </li>
                        <li className="diesease_view_item">
                            <div className="diesease_view_item_title">Doctor visit</div>
                            <div className="diesease_view_item_options">
                                <MoreVertIcon fontSize="40" className="diesease_view_item_icon" />
                            </div>
                        </li>
                        <li className="diesease_view_item">
                            <div className="diesease_view_item_title">Doctor visit</div>
                            <div className="diesease_view_item_options">
                                <MoreVertIcon fontSize="40" className="diesease_view_item_icon" />
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Dieseas
