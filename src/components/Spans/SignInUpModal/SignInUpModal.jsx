import PropTypes from 'prop-types';
import { useState } from 'react';
import ExitButton from '../../Elements/ExitButton/ExitButton';
import ShortTextField from '../../Elements/ShortTextField/ShortTextField';
import Button from '../../Elements/Button/Button';
import GoogleButton from '../../Elements/GoogleButton/GoogleButton';
import './SignInUpModal.css';

const SignInUpModal = ({ show, changeShow, handleSubmit, inORup }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const handleChangeUsername = (event) => { setUsername(event.target.value); };
    const handleChangePassword = (event) => { setPassword(event.target.value); };
    const handleChangePassword2 = (event) => { setPassword2(event.target.value); };
    const handleExit = () => { changeShow(false); };
    return (
        <div className={show ? "modal" : "modal hide"}>
            <ExitButton onClick={handleExit}/>
            { inORup == "in" ? (
                <h2 id="heading">Sign In</h2>
            ) : (
                <h2 id="heading">Sign Up</h2>
            )}
            <ShortTextField placeholder="Username or Email" onChange={handleChangeUsername} />
            <ShortTextField type="password" placeholder="Password" onChange={handleChangePassword} />
            { inORup == "up" ? (
                <>
                    <ShortTextField type="password" placeholder="Confirm Password" onChange={handleChangePassword2} />
                    <Button id="modalButton" text="SIGN UP" size="wide" onClick={console.log("dfdsfs")}/>
                </>
            ) : (
                <>
                    <a className="forgotPassword" href="https://www.coolmathgames.com/0-papas-freezeria"><p>forgot your password?</p></a>
                    <Button id="modalButton" text="SIGN IN" size="wide" onClick={null}/>
                </>
                
            )}
            <GoogleButton onClick={console.log("Google button press")}/>
        </div>
    );
};

SignInUpModal.propTypes = {
    show: PropTypes.bool,
    changeShow: PropTypes.func,
    handleSubmit: PropTypes.func,
    inORup: PropTypes.string
};

export default SignInUpModal;