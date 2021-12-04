import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const google = <FontAwesomeIcon icon={faGoogle} />

const Login = () => {
    const { signInUsingGoogle, setUsers, setIsLoading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const auth = getAuth();

    //google sign in 
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
                setUsers(result.user)
            })
            .finally(() => setIsLoading(false))
    }
    // email catch up
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    // password catch up
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    // checking login or not
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    }
    // handling registration using email password
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 5) {
            setError("Password should be 5 character!")
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Password should contain two digits!");
            return;
        }
        isLogin ? loginNewUser(email, password) : registerNewUser(email, password);
    }
    // login with email password
    const loginNewUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                history.push(redirect_uri)
                setUsers(result.user)
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }
    // creating new user with email password
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // setUsers(user)
                // console.log(user);
                setError('');
            })
            .catch((e) => {
                setError(e.message);
            });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center ">
                <div className="col-lg-6 col-md-6 col-sm-12 container shadow p-5 mb-5 bg-white rounded">
                    <h4 style={{ color: "#e1193e" }}>{isLogin ? 'LOGIN' : 'REGISTRATION'}</h4>
                    <form onSubmit={handleRegistration}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail4" placeholder="Email" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Password</label>
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword4" placeholder="Password" required />
                            </div>
                            <small className="text-danger">{error}</small>
                            <div className="form-group form-check">
                                <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Already Registered?</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </button>
                    </form>
                    <p>Sign in using Google <button onClick={handleGoogleSignIn} className="btn btn-outline-success">{google}</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;