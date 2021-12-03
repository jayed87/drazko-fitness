import React from 'react';
import NotFoundImg from '../../Images/404.jpg';
const NotFound = () => {
    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
            <img src={NotFoundImg} className="img-fluid" alt="NotFoundImage" />
        </div>
    );
};

export default NotFound;