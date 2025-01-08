import PropTypes from 'prop-types';
import { useState } from 'react';
import ExitButton from '../../Elements/ExitButton/ExitButton';
import ShortTextField from '../../Elements/ShortTextField/ShortTextField';
import Button from '../../Elements/Button/Button';
import GoogleButton from '../../Elements/GoogleButton/GoogleButton';
import { signUpUser, signInWtihEmail } from '../../../supabase';
import './SignInUpModal.css';

// Modal for signing in or signing up
/**
 * Params: supabase client, bool for displaying modal, function for closing modal (state change), function for caching most needed info, bool for if sign-in or sign-up
 * 
 */
const SignInUpModal = ({ show, changeShow, inORup }) => {

    // State for storing current email and password from text fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState(""); // Only used for sign up
    const [screenName, setScreenName] = useState(""); // Only used for sign up
    const handleChangeEmail = (event) => { setEmail(event.target.value);};
    const handleChangePassword = (event) => { setPassword(event.target.value);};
    const handleChangePassword2 = (event) => { setPassword2(event.target.value); };
    const handleChangeScreenName = (event) => { setScreenName(event.target.value); };
    
    // Close the modal by changing the display state
    const handleExit = () => { changeShow(false); }; // also triggers on overlay click
    const handleModalClick = (e) => {
        e.stopPropagation(); // Prevents closiang modal when clicking inside (still counts as overlay click)
    };

    return (
        <div className={show ? "modal-overlay" : ""} onClick={handleExit}>
            <div className={show ? "modal" : "modal hide"} onClick={handleModalClick}>
                <ExitButton onClick={handleExit}/>
                { inORup == "in" ? (<h2 id="heading">Sign In</h2>) : (<h2 id="heading">Sign Up</h2>) }
                <ShortTextField placeholder="Email" onChange={handleChangeEmail} />
                <ShortTextField type="password" placeholder="Password" onChange={handleChangePassword} />
                { inORup == "up" ? (
                    <>
                        <ShortTextField type="password" placeholder="Confirm Password" onChange={handleChangePassword2} />
                        <ShortTextField type="text" placeholder="Screen Name" onChange={handleChangeScreenName} />
                        <Button id="modalButton" text="SIGN UP" size="wide" onClick={ () => { signUpUser(email, password, password2, screenName); handleExit(); } }/>
                    </>
                ) : (
                    <>
                        <a className="forgotPassword" href="https://www.coolmathgames.com/0-papas-freezeria"><p>forgot your password?</p></a>
                        <Button id="modalButton" text="SIGN IN" size="wide" onClick={ () => { signInWtihEmail(email, password); handleExit(); } }/>
                    </>
                    
                )}
{/* TODO: Add Google auth */}
                <GoogleButton onClick={null}/>
            </div>
        </div>
        
    );
};

SignInUpModal.propTypes = {
    supabase: PropTypes.object,
    show: PropTypes.bool,
    changeShow: PropTypes.func,
    cacheFunction: PropTypes.func,
    inORup: PropTypes.string
};

export default SignInUpModal;

