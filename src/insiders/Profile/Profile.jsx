import React from 'react';
import './Profile.scss';

function Profile() {
    return (
        <div>
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
        </div>
    )
}

export default Profile
