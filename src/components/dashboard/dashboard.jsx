import React from 'react';
import './dashboard.scss';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '../../utilities/button/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//from here components of dashboard are getting imported
import MainSearch from './MainSearch/MainSearch';
import MainResult from './MainResult/MainResult';
import Navigation from './Navigation/Navigation';
import SideNavigation from './SideNavigation/SideNavigation';

export default function Dashboard() {
    return (
        <div className="error_dialog"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}assets/background_dashy.jpg)`,
            }}
        >
            <div
                className="container_dashboard">
                {/* Navigation code starts here */}
                <Navigation/>
                {/* Navigation code ends here */}
                {/* dashboard sidebar code */}
                <SideNavigation/>
                {/* dashboard sidebar ends here */}
                <div className="dashboard_content">
                    {/* main content 1 will start from here */}
                    {/* <MainSearch/> */}
                    <MainResult/>
                </div>
            </div>
        </div>
    )
}
