import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const gitHubIcon = <FontAwesomeIcon icon={faGithub} />

const Footer = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                    <div className="">
                        <h4>DAZKO</h4>
                        <small>CROSSFIT && FITNESS</small>
                    </div>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div>
                        <p>{twitterIcon} {facebookIcon} {gitHubIcon}</p>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <p>Copyright &copy;2021 All rights reserved by <span>Jayed Akbar Sumon</span></p>
            </div>
        </div>
    );
};

export default Footer;