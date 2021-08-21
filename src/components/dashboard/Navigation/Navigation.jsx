import React from 'react';
import Button2 from '../../../utilities/button2/button2';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToApp from '@material-ui/icons/ExitToApp';
import './Navigation.scss';

function Navigation() {
    return (
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
                            <NotificationsIcon style={{ fontSize: 30 }} 
                            className="icon_dashboard" />
                            <span className="notification_text">0</span>
                        </div>
                    </div>
                    <div className="dashboard_nav_item dashboard_nav_item-3">
                        <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} 
                        alt="company logo" className="profile" />
                        <span className="profile_text">Profile</span>
                    </div>
                    <div className="dashboard_nav_item dashboard_nav_item-3">
                        <ExitToApp className="icon_dashboard" 
                        style={{ fontSize: 30 }} />
                    </div>
                </div>
    )
}

export default Navigation
