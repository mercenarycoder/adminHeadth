import React from 'react';
import './dashboard.scss';

export default function Dashboard() {
    return (
        <div
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}assets/background_dashy.jpg)`
            }}
            className="container_dashboard">
            <div className="dashboard_nav">
                <div className="dashboard_nav_item dashboard_nav_item-1">
                    <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="company logo" className='register__logo-1' />
                </div>
                <div className="dashboard_nav_item dashboard_nav_item-2">

                </div>
                <div className="dashboard_nav_item dashboard_nav_item-3">

                </div>
                <div className="dashboard_nav_item dashboard_nav_item-4">

                </div>
                <div className="dashboard_nav_item dashboard_nav_item-5">

                </div>
                <div className="dashboard_nav_item dashboard_nav_item-6">

                </div>
                <div className="dashboard_nav_item dashboard_nav_item-7">

                </div>
            </div>
            <div className="dashboard_sidebar">
                side here
            </div>
            <div className="dashboard_content">
                main content will be here
            </div>
        </div>
    )
}
