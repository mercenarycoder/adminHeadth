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
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
                    <div className="main1">
                        <div className="search_main">
                            <input type="text" name="number" placeHolder="User Mobile Number" id="" className="search_main_number" />
                            <div className="search_main_btn-container">
                                <Button text="Search User" />
                            </div>
                        </div>
                        <div className="recent_searches">
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
                    </div>
                    <div className="main2">
                        <div className="profile_intro">
                            <div className="profile_intro_image">
                                <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="" className="profile_intro_icon" />
                            </div>
                            <div className="profile_intro_information">
                                <div className="profile_intro_information_name_row">
                                    <div className="profile_intro_information_heading">Name :</div>
                                    <div className="profile_intro_information_data">Manjeet Singh Pal</div>
                                </div>
                                <div className="profile_intro_information_mobile_row">
                                    <div className="profile_intro_information_heading">Mobile :</div>
                                    <div className="profile_intro_information_data">+91-73894318159</div>
                                </div>
                                <div className="profile_intro_information_dob_row">
                                    <div className="profile_intro_information_heading">Date Of Birth :</div>
                                    <div className="profile_intro_information_data">23 - 02 - 1999</div>
                                </div>
                                <div className="profile_intro_information_height_row">
                                    <div className="profile_intro_information_heading">Height :</div>
                                    <div className="profile_intro_information_data">185 cm</div>
                                </div>
                                <div className="profile_intro_information_weight_row">
                                    <div className="profile_intro_information_heading">Weight :</div>
                                    <div className="profile_intro_information_data">72 kg</div>
                                </div>
                                <div className="profile_intro_information_blood_row">
                                    <div className="profile_intro_information_heading">Blood Group :</div>
                                    <div className="profile_intro_information_data">A +</div>
                                </div>
                                <div className="profile_intro_information_counts">
                                    <div className="profile_intro_information_counts_prescriptions">5 Prescriptions</div>
                                    <div className="profile_intro_information_counts_vaccination">3 Vaccinations</div>
                                    <div className="profile_intro_information_counts_reports">10 Reports</div>
                                    <div className="profile_intro_information_counts_history">5 history</div>
                                    <div className="profile_intro_information_counts_history">5 allergy</div>
                                    <div className="profile_intro_information_counts_history">5 medicines</div>
                                    <div className="profile_intro_information_counts_history">5 dieseas</div>
                                </div>
                            </div>
                        </div>
                    {/* history code is here */}
                        <div className="history_view">
                            <h2 className="history_view_heading">History Section</h2>
                            <ul className="history_view_list">
                                <li className="history_view_item">
                                    <div className="history_view_item_title">Doctor visit</div>
                                    <div className="history_view_item_options">
                                        <MoreVertIcon fontSize="40" className="history_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="history_view_item">
                                    <div className="history_view_item_title">Doctor visit</div>
                                    <div className="history_view_item_options">
                                        <MoreVertIcon fontSize="40" className="history_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="history_view_item">
                                    <div className="history_view_item_title">Doctor visit</div>
                                    <div className="history_view_item_options">
                                        <MoreVertIcon fontSize="40" className="history_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="history_view_item">
                                    <div className="history_view_item_title">Doctor visit</div>
                                    <div className="history_view_item_options">
                                        <MoreVertIcon fontSize="40" className="history_view_item_icon"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    {/* allergy code is here */}
                        <div className="allergy_view">
                        <h2 className="allergy_view_heading">History Section</h2>
                            <ul className="allergy_view_list">
                                <li className="allergy_view_item">
                                    <div className="allergy_view_item_title">Doctor visit</div>
                                    <div className="allergy_view_item_options">
                                        <MoreVertIcon fontSize="40" className="allergy_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="allergy_view_item">
                                    <div className="allergy_view_item_title">Doctor visit</div>
                                    <div className="allergy_view_item_options">
                                        <MoreVertIcon fontSize="40" className="allergy_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="allergy_view_item">
                                    <div className="allergy_view_item_title">Doctor visit</div>
                                    <div className="allergy_view_item_options">
                                        <MoreVertIcon fontSize="40" className="allergy_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="allergy_view_item">
                                    <div className="allergy_view_item_title">Doctor visit</div>
                                    <div className="allergy_view_item_options">
                                        <MoreVertIcon fontSize="40" className="allergy_view_item_icon"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    {/* Diesease Code is here */}
                        <div className="diesease_view">
                        <h2 className="diesease_view_heading">History Section</h2>
                            <ul className="diesease_view_list">
                                <li className="diesease_view_item">
                                    <div className="diesease_view_item_title">Doctor visit</div>
                                    <div className="diesease_view_item_options">
                                        <MoreVertIcon fontSize="40" className="diesease_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="diesease_view_item">
                                    <div className="diesease_view_item_title">Doctor visit</div>
                                    <div className="diesease_view_item_options">
                                        <MoreVertIcon fontSize="40" className="diesease_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="diesease_view_item">
                                    <div className="diesease_view_item_title">Doctor visit</div>
                                    <div className="diesease_view_item_options">
                                        <MoreVertIcon fontSize="40" className="diesease_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="diesease_view_item">
                                    <div className="diesease_view_item_title">Doctor visit</div>
                                    <div className="diesease_view_item_options">
                                        <MoreVertIcon fontSize="40" className="diesease_view_item_icon"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                   {/* Medicine code is here */}
                        <div className="medicine_view">
                        <h2 className="medicine_view_heading">History Section</h2>
                            <ul className="medicine_view_list">
                                <li className="medicine_view_item">
                                    <div className="medicine_view_item_title">Doctor visit</div>
                                    <div className="medicine_view_item_title_minor">12 month duration</div>
                                    <div className="medicine_view_item_title_minor">2 pills a day</div>
                                    <div className="medicine_view_item_options">
                                        <MoreVertIcon fontSize="40" className="medicine_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="medicine_view_item">
                                    <div className="medicine_view_item_title">Doctor visit</div>
                                    <div className="medicine_view_item_title_minor">12 month duration</div>
                                    <div className="medicine_view_item_title_minor">2 pills a day</div>
                                    <div className="medicine_view_item_options">
                                        <MoreVertIcon fontSize="40" className="medicine_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="medicine_view_item">
                                    <div className="medicine_view_item_title">Doctor visit</div>
                                    <div className="medicine_view_item_title_minor">12 month duration</div>
                                    <div className="medicine_view_item_title_minor">2 pills a day</div>
                                    <div className="medicine_view_item_options">
                                        <MoreVertIcon fontSize="40" className="medicine_view_item_icon"/>
                                    </div>
                                </li>
                                <li className="medicine_view_item">
                                    <div className="medicine_view_item_title">Doctor visit</div>
                                    <div className="medicine_view_item_title_minor">12 month duration</div>
                                    <div className="medicine_view_item_title_minor">2 pills a day</div>
                                    <div className="medicine_view_item_options">
                                        <MoreVertIcon fontSize="40" className="medicine_view_item_icon"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                   {/* Reports code is here */}
                        <div className="report_heading">
                            <h2 className="report_heading_h2">Reports</h2>
                        {/* </div> */}

                        <div className="reports">
                            <div className="report">
                                <div className="report_name">
                                    Report Main
                                </div>
                                <div className="report_date">
                                    10-07-2021
                                </div>
                                <div className="report_type">
                                    Dental
                                </div>
                                <div className="report_doctor">
                                    Dr. Manjeet Singh
                                </div>
                                <div className="report_logo">
                                    <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="report logo" className="report_icon"/>
                                </div>
                                <div className="report_view">
                                    <div className="report_viewer">
                                        View
                                    </div>
                                </div>
                            </div>
                            <div className="report">
                                <div className="report_name">
                                    Report Main
                                </div>
                                <div className="report_date">
                                    10-07-2021
                                </div>
                                <div className="report_type">
                                    Dental
                                </div>
                                <div className="report_doctor">
                                    Dr. Manjeet Singh
                                </div>
                                <div className="report_logo">
                                    <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="report logo" className="report_icon"/>
                                </div>
                                <div className="report_view">
                                    <div className="report_viewer">
                                        View
                                    </div>
                                </div>
                            </div>
                            <div className="report">
                                <div className="report_name">
                                    Report Main
                                </div>
                                <div className="report_date">
                                    10-07-2021
                                </div>
                                <div className="report_type">
                                    Dental
                                </div>
                                <div className="report_doctor">
                                    Dr. Manjeet Singh
                                </div>
                                <div className="report_logo">
                                    <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="report logo" className="report_icon"/>
                                </div>
                                <div className="report_view">
                                    <div className="report_viewer">
                                        View
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    {/* Prescriptions Code is here */}
                    <div className="prescriptions_heading">
                        <h2 className="prescriptions_heading_h2">Prescriptions</h2>
                        <div className="prescriptions">
                            <div className="prescription">
                            <div className="prescription_name">
                                    Prescription Main
                                </div>
                                <div className="prescription_date">
                                    10-07-2021
                                </div>
                                <div className="prescription_doctor">
                                    Dr. Manjeet Singh
                                </div>
                                <div className="prescription_observe">
                                    Lorem, ipsum dolor......
                                </div>
                                <div className="prescription_logo">
                                    <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="prescription logo" className="prescription_icon"/>
                                </div>
                                <div className="prescription_view">
                                    <div className="prescription_viewer">
                                        View
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               {/* Vaccinations Code is here */}
                    <div className="prescriptions_heading">
                        <h2 className="prescriptions_heading_h2">Vaccination</h2>
                        <div className="prescriptions">
                            <div className="prescription">
                            <div className="prescription_name">
                                    Vaccine Name
                                </div>
                                <div className="prescription_date">
                                    Getting Date:- 10-07-2021
                                </div>
                                <div className="prescription_date">
                                    Renewal Date:- 10-07-2021
                                </div>
                                <div className="prescription_logo">
                                    <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="prescription logo" className="prescription_icon"/>
                                </div>
                                <div className="prescription_view">
                                    <div className="prescription_viewer">
                                        View
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
