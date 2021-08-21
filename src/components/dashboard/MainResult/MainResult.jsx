import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './MainResult.scss';
import Profile from '../../../insiders/Profile/Profile';
import History from '../../../insiders/History/History';
import Allergy from '../../../insiders/Allergy/Allergy';
import Diesease from '../../../insiders/Diesease/Diesease';
import Medicine from '../../../insiders/Medicine/Medicine';
import Report from '../../../insiders/reports/Reports';
import Prescriptions from '../../../insiders/Prescriptions/Prescriptions';
import Vaccination from '../../../insiders/Prescriptions/Vaccination';

function MainResult() {
    return (
            <div className="main2">
                <Profile/>
                {/* history code is here */}
                <History/>
                {/* allergy code is here */}
                <Allergy/>
                {/* Diesease Code is here */}
                <Diesease/>
                {/* Medicine code is here */}
                <Medicine/>
                {/* Reports code is here */}
                <Report/>
                {/* Prescriptions Code is here */}
                <Prescriptions/>
                {/* Vaccinations Code is here */}
                <Vaccination/>
            </div>
    )
}

export default MainResult
