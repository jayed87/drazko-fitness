import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Classes from '../Classes/Classes';
import Pricing from '../Pricing/Pricing';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Trainers></Trainers>
            <Classes></Classes>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;