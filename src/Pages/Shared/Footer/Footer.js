import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const gitHubIcon = <FontAwesomeIcon icon={faGithub} />

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center footer-info-container">
                <div className="col-lg-4 col-md-4 col-sm-12 text-center footer-info">
                    <div className="footer-header">
                        <h4>DAZKO</h4>
                        <small>CROSSFIT && FITNESS</small>
                    </div>
                    <p className="my-3">The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.</p>
                    <div className="footer-social">
                        <p><span><a href="https://twitter.com" target="_blank">{twitterIcon}</a></span>
                            <span><a href="https://facebook.com" target="_blank">{facebookIcon}</a></span>
                            <span><a href="https://github.com" target="_blank">{gitHubIcon}</a></span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row text-center footer-copyright">
                <p>Copyright &copy;2021 All rights reserved by <span>Jayed Akbar Sumon</span></p>
            </div>
        </div>
    );
};

export default Footer;