import React from 'react';
import './Reports.scss';

export default function Reports() {
    return (
        <div>
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
                            <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="report logo" className="report_icon" />
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
                            <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="report logo" className="report_icon" />
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
                            <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="report logo" className="report_icon" />
                        </div>
                        <div className="report_view">
                            <div className="report_viewer">
                                View
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
