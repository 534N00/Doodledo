import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../Elements/Button/Button';
import ProfilePic from '../../Elements/ProfilePic/ProfilePic';
import SignInUpModal from '../SignInUpModal/SignInUpModal';
import PopupBubble from '../../Elements/PopupBubble/PopupBubble';
import './Header.css';

const Header = ({ supabase, cacheFunction, UID, pfpURL, username}) => {
    // State setting for whem sign in/up modals are open
    const [signInModal, setSignInModal] = useState(false);
    const handleSignInModal = () => {
        setSignInModal(!signInModal);
        setSignUpModal(false);
    };
    const [signUpModal, setSignUpModal] = useState(false);
    const handleSignUpModal = () => {
        setSignUpModal(!signUpModal);
        setSignInModal(false);
    };

    // Sign out of app
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) { console.log("Signout error: ", error.message); }
        else { cacheFunction('','','',null); }  // clear cache
    }

    // For conditionaly loading the header logo
    const location = useLocation();

    // NEED TO MAKE FUNCTION SO THAT HANDLE WILL TRIGGER WHEN SUCCESSFUL SIGNIN
    // const [showBubble, setShowBubble] = useState(false);
    // const handleBubble = () => {
    //     setShowBubble(true);
    //     console.log("Bubble shown");
    //     setTimeout(() => {
    //         setShowBubble(false);
    //     }, 300000); // Hide the popup after 3 seconds
    // };
    
    // prob some query to backend to get user pfp, name, json of setting choices, notifs?
    return (
        <nav className="headerContainer">
            {UID != '' ? (
                // Header for signed in users
                <div className="headerContent">
                    <Link id="headerLogo" to='/'><h2>Doodledo</h2></Link>
                    <svg id="notif" width="25" height="31" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M2 24.3176H15.3858C17.1966 24.3176 19.0006 24.3784 20.8097 24.3784C21.5461 24.3784 22.2972 24.5 23 24.5M10.3064 27.8446C10.3741 27.9777 10.5263 28.1624 10.6248 28.2703C10.7668 28.4256 10.9791 28.4383 11.1253 28.5743C11.415 28.8437 11.7043 29 12.0872 29C12.7818 29 13.4735 28.8882 14.0469 28.5405C14.1386 28.4849 14.2594 28.2799 14.3133 28.1791C14.4051 28.0073 13.937 28.027 13.8454 28.027H12.8217C12.5257 28.027 12.1484 28.0149 11.8858 27.8784C11.6169 27.7386 11.079 27.8446 10.7743 27.8446M5.21723 22.8581C5.43593 22.1255 5.32981 21.2926 5.37972 20.5338C5.41735 19.9617 5.45121 19.3561 5.45121 18.7838C5.45121 18.265 5.53579 17.7085 5.5812 17.1892C5.65193 16.3804 5.70331 15.5742 5.74044 14.7635C5.79156 13.6475 5.65502 12.5083 5.75019 11.3953C5.80058 10.8059 6.04961 10.2627 6.14991 9.68919C6.2271 9.24789 6.35071 8.79388 6.62113 8.43243C7.08628 7.81071 7.75371 7.42512 8.3695 6.98649C8.66255 6.77775 8.99257 6.47435 9.31194 6.31757C9.67759 6.13806 10.0538 5.99277 10.4234 5.80068C11.0057 5.498 11.567 5.40541 12.2107 5.40541H12.9647C13.3772 5.40541 13.6849 5.54019 14.0761 5.64865C14.7174 5.82644 15.1639 6.42502 15.6847 6.80405C16.32 7.26632 17 7.69628 17.6183 8.15541C19.1465 9.29014 19.3199 11.3879 19.8672 13.0946C20.1572 13.9991 20.1337 15.1007 20.1337 16.0439C20.1337 17.0304 20.1231 18.0789 19.8412 19.027C19.6406 19.7017 19.6657 20.6043 19.6657 21.3074V23.1014M11.9443 5.22297C11.9443 4.78266 11.8024 4.32264 11.7103 3.89189C11.6459 3.59068 11.6518 3.30149 11.6518 2.98649C11.6518 2.34965 12.1295 2 12.6918 2C12.9524 2 13.2832 2.12598 13.4392 2.33446C13.5112 2.43073 13.631 2.49018 13.6407 2.62162C13.6535 2.79411 13.82 2.83155 13.8617 3C13.9983 3.55219 13.9917 4.09531 13.9917 4.67568" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    <ProfilePic src={pfpURL} alt="User PFP" onClick={signOut} size={40}/>
                    {/* {showBubble ? <PopupBubble child={<p><span style={{color: 'green', fontWeight: 'bold'}}>Success</span>ful sign-out!</p>} /> : null} */}
                </div>
            ) : (
                // Header for signed out users
                <div className="headerContent">
                    {location.pathname != '/' ? <Link id="headerLogo" to='/'><h2>Doodledo</h2></Link> : null}
                    <Button onClick={handleSignUpModal} text="SIGN UP" size="wide" id="signUP" />
                    <Button onClick={handleSignInModal} text="SIGN IN"/>
                    <SignInUpModal supabase={supabase} show={signInModal} changeShow={setSignInModal} cacheFunction={cacheFunction} inORup="in"/>
                    <SignInUpModal supabase={supabase} show={signUpModal} changeShow={setSignUpModal} cacheFunction={null} inORup="up"/>
                </div>
            )}
        </nav>
    );
}

Header.propTypes = {
    supabase: PropTypes.object,
    UID: PropTypes.string,
    cacheFunction: PropTypes.func,
    pfpURL: PropTypes.string,
    username: PropTypes.string
};

export default Header;