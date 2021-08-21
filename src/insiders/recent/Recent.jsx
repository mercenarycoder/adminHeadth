import React from 'react'
import './Recent.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Recent() {
    return (
        <div>
            <div className="recent_searches_user">
                <div className="recent_searches_user_part1">
                    <img src={process.env.PUBLIC_URL + 'assets/background_dashy.jpg'} alt="user logo" className="recent_searches_user_logo" />
                </div>
                <div className="recent_searches_user_text">
                    <div className="recent_searches_user_text_part1">
                        <div className="recent_searches_name">Manjeet Singh</div>
                        <div className="recent_searches_btn">View</div>
                    </div>
                    <div className="recent_searches_user_text_part2">
                        <div className="recent_searches_document">44 Documents</div>
                        <div className="recent_searches_dob">23 / 02 / 1999</div>
                    </div>
                    <div className="recent_searches_user_text_part3">
                        <LocationOnIcon fontSize="40" className="recent_searches_icon" />
                        <div className="recent_searches_location">Bhopal,Madhya Pradesh</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recent
