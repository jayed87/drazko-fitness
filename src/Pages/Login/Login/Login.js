import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const google = <FontAwesomeIcon icon={faGoogle} />
// const righArrow = <FontAwesomeIcon icon={faArrowRight} />
const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-10 col-sm-12 offset-md-5">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                            </div>
                        </div>
                        <p>Sign in using Google <button className="btn btn-outline-success">{google}</button></p>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;