import React from 'react';
import './Prescriptions.scss';

function Prescriptions() {
    return (
        <div>
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
                                <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="prescription logo" className="prescription_icon" />
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
    )
}

export default Prescriptions;