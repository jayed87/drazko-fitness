import React from 'react';
import { Link } from 'react-router-dom';

const Class = ({ clas }) => {
    const { id, name, img } = clas;
    // console.log(clas.id);
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
            <div className="card text-white">
                <img className="card-img img-fluid" src={img} alt="Card" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
            <Link to={`/classDetails/${id}`}>
                <button className="btn btn-outline-info btn-block">Details</button>
            </Link>
        </div>
    );
};

export default Class;