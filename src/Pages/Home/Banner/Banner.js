import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import b1 from '../../../Images/Banner/b1.jpg';
import b2 from '../../../Images/Banner/b2.jpg';
import b3 from '../../../Images/Banner/b3.jpg';
const Banner = () => {
    return (
        <div id="banner">
            <Carousel className="img-height">
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={b1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>INCREASE YOUR MUSCLE POWER</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={b2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>SHAPE YOUR PERFECT BODY</h3>
                        <p>Sound body and mind can make you keep going in long futur. Get a chance to explore full potetial of your body.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={b3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>YOU ONLY FAIL, WHEN YOU STOP TRYING</h3>
                        <p>Only you can shape your body. No success can achieve without coming out of your comfort zone!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;