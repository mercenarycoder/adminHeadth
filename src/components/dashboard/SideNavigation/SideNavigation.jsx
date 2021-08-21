import React from 'react';
import './SideNavigation.scss';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import ClosedCaptionIcon from '@material-ui/icons/ClosedCaption';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

function SideNavigation() {
    return (
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
    )
}

export default SideNavigation
