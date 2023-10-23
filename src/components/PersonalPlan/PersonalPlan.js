import React from 'react';
import './PersonalPlan.css';
import BasicPlan from './BasicPlan/BasicPlan';

const PersonalPlan = () => {
    return (
        <div className='personalPlan'>
            <div className="planningHead">
                <div className="planningContentHead">
                    <p className='planningSort'>Choose your personal plan</p>
                    <p className='planningTitle'>To best pricing plans to get <br />
                        <span >your best</span>
                    </p>
                    <div className="planContent">
                        <div className="basicPlan">
                            <BasicPlan></BasicPlan>

                        </div>
                        <div className="bestPlan">

                        </div>
                        <div className="goldPlan">

                        </div>
                    </div>






                </div>

            </div>

        </div>
    );
};

export default PersonalPlan;