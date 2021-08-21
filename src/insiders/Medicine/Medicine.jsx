import React from 'react';
import './Medicine.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Medicine() {
    return (
        <div>
            <div className="medicine_view">
                <h2 className="medicine_view_heading">History Section</h2>
                <ul className="medicine_view_list">
                    <li className="medicine_view_item">
                        <div className="medicine_view_item_title">Doctor visit</div>
                        <div className="medicine_view_item_title_minor">12 month duration</div>
                        <div className="medicine_view_item_title_minor">2 pills a day</div>
                        <div className="medicine_view_item_options">
                            <MoreVertIcon fontSize="40" className="medicine_view_item_icon" />
                        </div>
                    </li>
                    <li className="medicine_view_item">
                        <div className="medicine_view_item_title">Doctor visit</div>
                        <div className="medicine_view_item_title_minor">12 month duration</div>
                        <div className="medicine_view_item_title_minor">2 pills a day</div>
                        <div className="medicine_view_item_options">
                            <MoreVertIcon fontSize="40" className="medicine_view_item_icon" />
                        </div>
                    </li>
                    <li className="medicine_view_item">
                        <div className="medicine_view_item_title">Doctor visit</div>
                        <div className="medicine_view_item_title_minor">12 month duration</div>
                        <div className="medicine_view_item_title_minor">2 pills a day</div>
                        <div className="medicine_view_item_options">
                            <MoreVertIcon fontSize="40" className="medicine_view_item_icon" />
                        </div>
                    </li>
                    <li className="medicine_view_item">
                        <div className="medicine_view_item_title">Doctor visit</div>
                        <div className="medicine_view_item_title_minor">12 month duration</div>
                        <div className="medicine_view_item_title_minor">2 pills a day</div>
                        <div className="medicine_view_item_options">
                            <MoreVertIcon fontSize="40" className="medicine_view_item_icon" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Medicine
