import React from 'react';
import './dashboard.scss';
import Button2 from '../../utilities/button2/button2';
import {Link} from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AppsIcon from '@material-ui/icons/Apps';

export default function Dashboard() {
    return (
        <div
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}assets/background_dashy.jpg)`,
                
            }}
            className="container_dashboard">
            <div className="dashboard_nav">
                <div className="dashboard_nav_item dashboard_nav_item-1">
                    <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="company logo" className='register__logo-1' />
                </div>
                <div className="dashboard_nav_item dashboard_nav_item-2">
                    <Button2 name="Overview"/>
                </div>
                <div className="dashboard_nav_item dashboard_nav_item-2">
                    {/* <a href="#" rel="noopener noreferrer">Prescriptions</a> */}
                    <Button2 name="Prescriptions"/>
                </div>
                <div className="dashboard_nav_item dashboard_nav_item-2">
                    <Button2 name="Reports"/>
                    {/* <a href="#" rel="noopener noreferrer">Reports</a> */}
                </div>
                <div className="dashboard_nav_item dashboard_nav_item-3">
                    <div className="notification">
                    <NotificationsIcon style={{fontSize:40 }} className="icon_dashboard"/>
                    <span className="notification_text">0</span>
                    </div>
                </div>
                <div className="dashboard_nav_item dashboard_nav_item-3">
                    <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="company logo" className="profile" />
                    <span className="profile_text">Profile</span>
                </div>
                <div className="dashboard_nav_item dashboard_nav_item-3">
                    <ExitToApp className="icon_dashboard" style={{fontSize:40 }}/>
                </div>
            </div>
            <div className="dashboard_sidebar">
                <div className="sidebar_main">
                    <div className="sidebar_main_items">
                        <div className="sidebar_main_item sidebar_main_grey">Headth Studio</div>
                        <div className="sidebar_main_item sidebar_main_icon">
                            <AppsIcon className="icon_dashboard" style={{fontSize:30}}/>
                            <div className="sidebar_main_white">Dashboard</div>
                        </div>
                        <div className="sidebar_main_item sidebar_main_grey">Headth Studio</div>
                        <div className="sidebar_main_item sidebar_main_icon">
                            <AppsIcon className="icon_dashboard" style={{fontSize:30}}/>
                            <div className="sidebar_main_white">Dashboard</div>
                        </div>
                        <div className="sidebar_main_item sidebar_main_grey">Headth Studio</div>
                        <div className="sidebar_main_item sidebar_main_icon">
                            <AppsIcon className="icon_dashboard" style={{fontSize:30}}/>
                            <div className="sidebar_main_white">Dashboard</div>
                        </div>
                        <div className="sidebar_main_item sidebar_main_grey">Headth Studio</div>
                        <div className="sidebar_main_item sidebar_main_icon">
                            <AppsIcon className="icon_dashboard" style={{fontSize:30}}/>
                            <div className="sidebar_main_white">Dashboard</div>
                        </div>
                    </div>
                    <div className="sidebar_main_footer">
                        @2021 copywrite reserved to headth corporations
                    </div>
                </div>
            </div>
            <div className="dashboard_content">
                main content will be here
            </div>
        </div>
    )
}
