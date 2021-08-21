import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Allergy.scss';

function Allergy() {
    return (
        <div>
            <div className="allergy_view">
                    <h2 className="allergy_view_heading">History Section</h2>
                    <ul className="allergy_view_list">
                        <li className="allergy_view_item">
                            <div className="allergy_view_item_title">Doctor visit</div>
                            <div className="allergy_view_item_options">
                                <MoreVertIcon fontSize="40" className="allergy_view_item_icon" />
                            </div>
                        </li>
                        <li className="allergy_view_item">
                            <div className="allergy_view_item_title">Doctor visit</div>
                            <div className="allergy_view_item_options">
                                <MoreVertIcon fontSize="40" className="allergy_view_item_icon" />
                            </div>
                        </li>
                        <li className="allergy_view_item">
                            <div className="allergy_view_item_title">Doctor visit</div>
                            <div className="allergy_view_item_options">
                                <MoreVertIcon fontSize="40" className="allergy_view_item_icon" />
                            </div>
                        </li>
                        <li className="allergy_view_item">
                            <div className="allergy_view_item_title">Doctor visit</div>
                            <div className="allergy_view_item_options">
                                <MoreVertIcon fontSize="40" className="allergy_view_item_icon" />
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Allergy
