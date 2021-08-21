import React from 'react';
import './dashboard.scss';
import Button2 from '../../utilities/button2/button2';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AppsIcon from '@material-ui/icons/Apps';
import Button from '../../utilities/button/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import ClosedCaptionIcon from '@material-ui/icons/ClosedCaption';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

//from here components of dashboard are getting imported
import MainSearch from './MainSearch/MainSearch';
import MainResult from './MainResult/MainResult';

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
                <div className="dashboard_nav">
                    <div className="dashboard_nav_item dashboard_nav_item-1">
                        <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="company logo" className='register__logo-1' />
                    </div>
                    <div className="dashboard_nav_item dashboard_nav_item-2">
                        <Button2 name="Overview" />
                    </div>
                    <div className="dashboard_nav_item dashboard_nav_item-2">
                        {/* <a href="#" rel="noopener noreferrer">Prescriptions</a> */}
                        <Button2 name="Prescriptions" />
                    </div>
                    <div className="dashboard_nav_item dashboard_nav_item-2">
                        <Button2 name="Reports" />
                        {/* <a href="#" rel="noopener noreferrer">Reports</a> */}
                    </div>
                    <div className="dashboard_nav_item dashboard_nav_item-3">
                        <div className="notification">
                            <NotificationsIcon style={{ fontSize: 30 }} className="icon_dashboard" />
                            <span className="notification_text">0</span>
                        </div>
                    </div>
                    <div className="dashboard_nav_item dashboard_nav_item-3">
                        <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="company logo" className="profile" />
                        <span className="profile_text">Profile</span>
                    </div>
                    <div className="dashboard_nav_item dashboard_nav_item-3">
                        <ExitToApp className="icon_dashboard" style={{ fontSize: 30 }} />
                    </div>
                </div>
                {/* Navigation code ends here */}
                {/* dashboard sidebar code */}
                <div className="dashboard_sidebar">
                    <div className="dashboard_sidebar_main">
                        <div className="dashboard_sidebar_main_items">
                            <div className="dashboard_sidebar_main_item dashboard_sidebar_main_grey">Headth Studio</div>
                            <div className="dashboard_sidebar_main_item dashboard_sidebar_main_icon">
                                <AppsIcon className="icon_dashboard" style={{ fontSize: 30 }} />
                                <div className="dashboard_sidebar_main_white">Dashboard</div>
                            </div>
                            <div className="dashboard_sidebar_main_item dashboard_sidebar_main_grey">Setting</div>
                            <div className="dashboard_sidebar_main_item dashboard_sidebar_main_icon">
                                <PersonIcon className="icon_dashboard" style={{ fontSize: 30 }} />
                                <div className="dashboard_sidebar_main_white">Profile Edit</div>
                            </div>
                            <div className="dashboard_sidebar_main_item dashboard_sidebar_main_grey">Membership Code</div>
                            <div className="dashboard_sidebar_main_item dashboard_sidebar_main_icon">
                                <ClosedCaptionIcon className="icon_dashboard" style={{ fontSize: 30 }} />
                                <div className="dashboard_sidebar_main_white">wipro34</div>
                            </div>
                            <div className="dashboard_sidebar_main_item dashboard_sidebar_main_grey">Resource Links</div>
                            <div className="dashboard_sidebar_main_item dashboard_sidebar_main_icon">
                                <ContactSupportIcon className="icon_dashboard" style={{ fontSize: 30 }} />
                                <div className="dashboard_sidebar_main_white">Contact us</div>
                            </div>
                        </div>
                        <div className="dashboard_sidebar_main_footer">
                            2021 copywrite reserved to headth corporations
                        </div>
                    </div>
                </div>
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
