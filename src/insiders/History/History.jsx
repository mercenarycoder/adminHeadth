import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './History.scss';

function History() {
    return (
        <div>
             <div className="history_view">
                    <h2 className="history_view_heading">History Section</h2>
                    <ul className="history_view_list">
                        <li className="history_view_item">
                            <div className="history_view_item_title">Doctor visit</div>
                            <div className="history_view_item_options">
                                <MoreVertIcon fontSize="40" className="history_view_item_icon" />
                            </div>
                        </li>
                        <li className="history_view_item">
                            <div className="history_view_item_title">Doctor visit</div>
                            <div className="history_view_item_options">
                                <MoreVertIcon fontSize="40" className="history_view_item_icon" />
                            </div>
                        </li>
                        <li className="history_view_item">
                            <div className="history_view_item_title">Doctor visit</div>
                            <div className="history_view_item_options">
                                <MoreVertIcon fontSize="40" className="history_view_item_icon" />
                            </div>
                        </li>
                        <li className="history_view_item">
                            <div className="history_view_item_title">Doctor visit</div>
                            <div className="history_view_item_options">
                                <MoreVertIcon fontSize="40" className="history_view_item_icon" />
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default History
