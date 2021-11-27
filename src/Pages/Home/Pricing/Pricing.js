import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faArrowRight} />

const Pricing = () => {

    return (
        <div className="container" id="pricing">
            <div>
                <p>OUR PRICING</p>
                <h4>PRICING & PACKAGES</h4>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p>BASIC PLAN</p>
                    <p><small>$</small><span>49</span></p>
                    <div>
                        <p><span>{element}</span> Convenient Time</p>
                        <p><span>{element}</span> Spacial Class</p>
                        <p><span>{element}</span> Group Training</p>
                        <p><span>{element}</span> Free Fitness Training</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p>BEGINNER PLAN</p>
                    <p><small>$</small><span>79</span></p>
                    <div>
                        <p><span>{element}</span> Personal Training</p>
                        <p><span>{element}</span> Convenient Time</p>
                        <p><span>{element}</span> Spacial Class</p>
                        <p><span>{element}</span> Group Training</p>
                        <p><span>{element}</span> Free Fitness Training</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p>PREMIUM PLAN</p>
                    <p><small>$</small><span>109</span></p>
                    <div>
                        <p><span>{element}</span> Personal Training</p>
                        <p><span>{element}</span> Convenient Time</p>
                        <p><span>{element}</span> Spacial Class</p>
                        <p><span>{element}</span> Group Training</p>
                        <p><span>{element}</span> Free Fitness Training</p>
                        <p><span>{element}</span> Free Yoga</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p>ULTIMATE PLAN</p>
                    <p><small>$</small><span>149</span></p>
                    <div>
                        <p><span>{element}</span> Personal Trainer</p>
                        <p><span>{element}</span> Convenient Time</p>
                        <p><span>{element}</span> Spacial Class</p>
                        <p><span>{element}</span> Monthly Free Session</p>
                        <p><span>{element}</span> Group Training</p>
                        <p><span>{element}</span> Free Fitness Training</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;