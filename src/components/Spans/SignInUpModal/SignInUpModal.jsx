import PropTypes from 'prop-types';
import { useState } from 'react';
import ExitButton from '../../Elements/ExitButton/ExitButton';
import ShortTextField from '../../Elements/ShortTextField/ShortTextField';
import Button from '../../Elements/Button/Button';
import GoogleButton from '../../Elements/GoogleButton/GoogleButton';
import './SignInUpModal.css';

// Modal for signing in or signing up
const SignInUpModal = ({ supabase, show, changeShow, cacheFunction, inORup }) => {
    // State for storing current email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState(""); // Only used for sign up
    const [screenName, setScreenName] = useState(""); // Only used for sign up
    const handleChangeEmail = (event) => { setEmail(event.target.value);};
    const handleChangePassword = (event) => { setPassword(event.target.value);};
    const handleChangePassword2 = (event) => { setPassword2(event.target.value); };
    const handleChangeScreenName = (event) => { setScreenName(event.target.value); };
    
    // Function to close modal
    const handleExit = () => { changeShow(false); }; // also triggers on overlay click
    const handleModalClick = (e) => {
        e.stopPropagation(); // Prevents closing modal when clicking inside (still counts as overlay click)
    };

    // For auth see https://supabase.com/docs/guides/auth/passwords
    const signUpUser = async () =>  {
        if (password != password2) {
            console.error("Passwords do not match"); return;
        }
        if (password.length < 8) { console.error("Password must be at least 8 characters long."); return; }
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: { data: { screen_name: screenName } }
        })
        if (error) {
            console.error("Error signing up: ", error.message);
            return;
        }
        console.log(data);
        handleExit();
    }
    const signInWtihEmail = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        if (error) {
            console.error("Error signing in: ", error.message);
            return;
        }
    console.log(data);
        // Cache most needed info
        cacheFunction(data.user.id, data.user.user_metadata.screen_name, "src\\assets\\testPFP.jpg");
        handleExit();
    };

    return (
        <div className={show ? "modal-overlay" : ""} onClick={handleExit}>
            <div className={show ? "modal" : "modal hide"} onClick={handleModalClick}>
                <ExitButton onClick={handleExit}/>
                { inORup == "in" ? (
                    <h2 id="heading">Sign In</h2>
                ) : (
                    <h2 id="heading">Sign Up</h2>
                )}
                <ShortTextField placeholder="Email" onChange={handleChangeEmail} />
                <ShortTextField type="password" placeholder="Password" onChange={handleChangePassword} />
                { inORup == "up" ? (
                    <>
                        <ShortTextField type="password" placeholder="Confirm Password" onChange={handleChangePassword2} />
                        <ShortTextField type="text" placeholder="Screen Name" onChange={handleChangeScreenName} />
                        <Button id="modalButton" text="SIGN UP" size="wide" onClick={signUpUser}/>
                    </>
                ) : (
                    <>
                        <a className="forgotPassword" href="https://www.coolmathgames.com/0-papas-freezeria"><p>forgot your password?</p></a>
                        <Button id="modalButton" text="SIGN IN" size="wide" onClick={signInWtihEmail}/>
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

