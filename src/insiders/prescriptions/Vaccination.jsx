import React from 'react';
import './Prescriptions.scss';

function Vaccination() {
    return (
        <div>
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

export default Vaccination
