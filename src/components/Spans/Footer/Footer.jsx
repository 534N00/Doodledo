import instaSVG from '../../../assets/insta.svg';
import LinkedinSVG from '../../../assets/linkedin.svg';
import emailSVG from '../../../assets/email.svg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <span>
                <h2 id="logo">Doodledo</h2>
                <h6>Copyright  © 2024</h6>
            </span>
            <span><h4>Privacy Policy</h4></span>
            <span><h4>Terms of Service</h4></span>
            <span><h4>Support</h4></span>
            <span><h4>FAQ</h4></span>
            <span><h4 id="with-love">Lovingly made by Sean Craig</h4></span>
            <a href="https://www.instagram.com/seancraggles/" target="_blank"><img src={instaSVG} alt="Instagram link to Sean Craig"/></a>
            <a href="https://www.linkedin.com/in/sean-a-craig/" target="_blank"><img src={LinkedinSVG} alt="Linkedin link to Sean Craig"/></a>
            <a href="mailto:seancraggles@gmail.com"><img src={emailSVG} alt="Sean Craig's email"/></a>
        </div>
    );
};

export default Footer;