import React from 'react';
import './BestPlan.css';
import { FiArrowRightCircle } from "react-icons/fi";
const BestPlan = () => {

    const btnStart = () => {
        console.log('new project of gold');
    }
    return (

        <div className='bestPlanHead'>
            <p className='sortPlanB'>Best Plan</p>

            <div className="bestPlanContent">
                

                <h3 className='bestPlanTitle'>Basic Plan</h3>
                <h1 className='bestPlanDollar'>$279.00</h1>
                <p className='bestPlanMonth'>Per month</p>
                <hr />
                <p className='bestPlanTitles'> <span className='bsArrowBestPlan'> <FiArrowRightCircle size={14} color='purple' /> </span> 3 Page with Elementor</p>

                <p className='bestPlanTitles'> <span className='bsArrowBestPlan' > <FiArrowRightCircle color='purple' size={14} /> </span> Content Upload</p>

                <p className='bestPlanTitles'> <span className='bsArrowBestPlan'> <FiArrowRightCircle color='purple' size={14} /> </span> Design customization</p>

                <p className='bestPlanTitles'> <span className='bsArrowBestPlan'> <FiArrowRightCircle color='purple' size={14} /> </span> Design with XD</p>

                <p className='bestPlanTitles'> <span className='bsArrowBestPlan'> <FiArrowRightCircle color='purple' size={14} /> </span>Project Management</p>
                <a href="/projectShow">
                    <button className='bestPlanBtn' type='button' onClick={btnStart}>Start My Project Now</button>
                </a>

            </div>


        </div>
    );
};

export default BestPlan;