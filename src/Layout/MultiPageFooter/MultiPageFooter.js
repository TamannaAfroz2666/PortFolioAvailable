import React from 'react';
import './MultiPageFooter.css';

const MultiPageFooter = () => {
    return (
        <div className='MultiPageFooter'>
            <hr className='multiPageHr' />
            <div className="footer_infoMulti">
                <div className="footer_tag">
                    <p className='footerTag_title'>© T_A 2023 | All Rights Reserved
                    </p>

                </div>
                <div className="footerTerms1">
                    <ul className='footerTermsUl'>
                        <li>
                            <a href="/terms-condition" className='linkNameFooter'>Terms & Condition</a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className='linkNameFooter'>Privacy policy</a>
                        </li>
                        
                    </ul>


                </div>
            </div>

        </div>
    );
};

export default MultiPageFooter;