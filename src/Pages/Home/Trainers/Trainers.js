import React from 'react';
import t1 from '../../../Images/Trainers/t1.jpg';
import t2 from '../../../Images/Trainers/t2.jpg';
import t3 from '../../../Images/Trainers/t3.jpg';
import t4 from '../../../Images/Trainers/t4.jpg';
const Trainers = () => {
    return (
        <div className="container" id="trainers">
            <div>
                <p>Trainer</p>
                <h4>FITNESS <span>TRAINER</span></h4>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src={t1} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src={t2} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src={t3} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src={t4} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainers;