import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Pricing.css';

const rightArrow = <FontAwesomeIcon icon={faArrowRight} />

const Pricing = () => {

    return (
        <div className="container shadow p-5 mb-5 bg-white rounded" id="pricing">
            <div className="text-center trainer-header mb-4">
                <small>OUR PRICING</small>
                <h3>PRICING & <span>PACKAGES</span></h3>
            </div>
            <div className="row">
                <div className=" py-4 col-lg-3 col-md-3 col-sm-12 pricing-content shadow bg-white rounded">
                    <h6>BASIC PLAN</h6>
                    <p><small>$</small><span>49</span></p>
                    <div>
                        <p>{rightArrow} Convenient Time</p>
                        <p>{rightArrow} Spacial Class</p>
                        <p>{rightArrow} Group Training</p>
                        <p>{rightArrow} Free Fitness Training</p>
                    </div>
                </div>
                <div className=" py-4 col-lg-3 col-md-3 col-sm-12 pricing-content shadow bg-white rounded">
                    <h6>BEGINNER PLAN</h6>
                    <p><small>$</small><span>79</span></p>
                    <div>
                        <p>{rightArrow} Personal Training</p>
                        <p>{rightArrow} Convenient Time</p>
                        <p>{rightArrow} Spacial Class</p>
                        <p>{rightArrow} Group Training</p>
                        <p>{rightArrow} Free Fitness Training</p>
                    </div>
                </div>
                <div className="py-4 col-lg-3 col-md-3 col-sm-12 pricing-content shadow bg-white rounded">
                    <h6>PREMIUM PLAN</h6>
                    <p>$<span>109</span></p>
                    <div>
                        <p>{rightArrow} Convenient Time</p>
                        <p>{rightArrow} Personal Training</p>
                        <p>{rightArrow} Group Training</p>
                        <p>{rightArrow} Spacial Class</p>
                        <p>{rightArrow} Free Fitness Training</p>
                        <p>{rightArrow} Free Yoga</p>
                    </div>
                </div>
                <div className="py-4 col-lg-3 col-md-3 col-sm-12 pricing-content shadow bg-white rounded">
                    <h6>ULTIMATE PLAN</h6>
                    <p><small>$</small><span>149</span></p>
                    <div>
                        <p>{rightArrow} Personal Trainer</p>
                        <p>{rightArrow} Convenient Time</p>
                        <p>{rightArrow} Spacial Class</p>
                        <p>{rightArrow} Monthly Free Session</p>
                        <p>{rightArrow} Group Training</p>
                        <p>{rightArrow} Free Fitness Training</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;