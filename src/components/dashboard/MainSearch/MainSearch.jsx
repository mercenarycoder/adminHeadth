import React from 'react';
import './MainSearch.scss';
import Search from '../../../insiders/search/Search';
import Recent from '../../../insiders/recent/Recent';

function MainSearch() {
    return (
        <div>
            <div className="main1">
                <Search />
                <div className="recent_searches">
                    <Recent />
                    <Recent />
                </div>
            </div>
        </div>
    )
}

export default MainSearch
