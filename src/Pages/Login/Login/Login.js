import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../../../hooks/useAuth';
const google = <FontAwesomeIcon icon={faGoogle} />

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-10 col-sm-12 offset-md-3">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                    <p>Sign in using Google <button onClick={signInUsingGoogle} className="btn btn-outline-success">{google}</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;