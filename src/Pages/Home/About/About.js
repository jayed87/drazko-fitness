import React from 'react';
import a1 from '../../../Images/About/a1.jpg'
const About = () => {
    return (
        <div className="container" id="about">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12">
                    <img className="w-100 h-75" src={a1} alt="" />
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                    <p>Information about us</p>
                    <h3>DAZKO A <span>CROSSFIT</span> WORKOUT TRAINING CENTER</h3>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                    <div>
                        <p>MEN FITNESS AND WORKOUT</p>
                        <p>WOMEN FITNESS AND WORKOUT</p>
                        <p>PERSONAL TRAINING</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;