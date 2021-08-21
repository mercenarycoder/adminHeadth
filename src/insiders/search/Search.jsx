import React from 'react'
import Button from '../../utilities/button/Button';
import './Search.scss';

function Search() {
    return (
        <div>
            <div className="search_main">
                <input type="text" name="number" placeHolder="User Mobile Number" id="" className="search_main_number" />
                <div className="search_main_btn-container">
                    <Button text="Search User" />
                </div>
            </div>
        </div>
    )
}

export default Search
