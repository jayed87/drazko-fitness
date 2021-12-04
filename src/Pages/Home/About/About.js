import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import a1 from '../../../Images/About/a1.jpg'
import './About.css';
const rightArrow = <FontAwesomeIcon icon={faArrowRight} />

const About = () => {
    return (
        <div className="shadow p-5 bg-white rounded container my-5" id="about">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12">
                    <img className="img-fluid img-thumbnail" src={a1} alt="" />
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 about-content">
                    <small>INFORMATION ABOUT US</small>
                    <h2 className="my-4">DAZKO A <span>CROSSFIT</span> WORKOUT TRAINING CENTER</h2>
                    <p className="text-muted mb-5">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                    <div>
                        <p><span>{rightArrow}</span> MEN FITNESS AND WORKOUT</p>
                        <p><span>{rightArrow}</span> WOMEN FITNESS AND WORKOUT</p>
                        <p><span>{rightArrow}</span> PERSONAL TRAINING</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;