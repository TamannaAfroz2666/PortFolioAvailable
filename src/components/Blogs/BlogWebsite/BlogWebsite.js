import React from 'react';
import './BlogWebsite.css'
import image2 from '../../../assets/Images/Blog/2.png';

const BlogWebsite = () => {
    return (
        <div className='blogWebsiteHead'>
            <div className="customerBody">
                <div className="customerContent">
                    <a href="/customer">
                        <div className="customerCard">
                        <img className='img' src={image2} alt="" />
                        <p className='customerDate'>Web Design /April 30, 2023</p>
                        <p className='titleCard'>Building brands though Website service </p>
                        <p className='cardDes'> It approach that brands can use to establish familiarity, trust, and added-value for their customers through brand positioning.</p>





                        </div>

                   
                  
                    </a>

                </div>

            </div>
            
        </div>
    );
};

export default BlogWebsite;