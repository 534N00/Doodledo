import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <span>
                <Link id="footerLogo" to="/"><h2>Doodledo</h2></Link>
                <h6>Copyright  © 2024</h6>
            </span>
            <Link className="clickable" to="/privacy"><h4>Privacy Policy</h4></Link>
            <Link className="clickable" to="/tos"><h4>Terms of Service</h4></Link>
            <Link className="clickable" to="/support"><h4>Support</h4></Link>
            <Link className="clickable" to="/faq"><h4>FAQ</h4></Link>
            <span><h4 id="with-love">Lovingly made by Sean Craig</h4></span>
            <a className="clickable" href="https://www.instagram.com/seancraggles/" target="_blank">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Link to Sean Craig&apos;s Instagram</title>
                    <path d="M29.1667 10.8334H29.1833M11.6667 3.33337H28.3333C32.9357 3.33337 36.6667 7.06433 36.6667 11.6667V28.3334C36.6667 32.9357 32.9357 36.6667 28.3333 36.6667H11.6667C7.0643 36.6667 3.33334 32.9357 3.33334 28.3334V11.6667C3.33334 7.06433 7.0643 3.33337 11.6667 3.33337ZM26.6667 18.95C26.8724 20.3371 26.6354 21.7537 25.9896 22.9984C25.3438 24.2431 24.3219 25.2524 23.0694 25.8828C21.8169 26.5133 20.3974 26.7327 19.013 26.5099C17.6286 26.2872 16.3496 25.6335 15.3581 24.642C14.3665 23.6504 13.7129 22.3715 13.4901 20.9871C13.2673 19.6026 13.4868 18.1832 14.1172 16.9307C14.7477 15.6781 15.757 14.6563 17.0017 14.0104C18.2463 13.3646 19.6629 13.1277 21.05 13.3334C22.4649 13.5432 23.7748 14.2025 24.7862 15.2139C25.7976 16.2253 26.4569 17.5352 26.6667 18.95Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
            <a className="clickable" href="https://www.linkedin.com/in/sean-a-craig/" target="_blank">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Linkedin link to Sean Craig</title>
                    <path d="M26.6666 13.3334C29.3188 13.3334 31.8624 14.3869 33.7377 16.2623C35.6131 18.1377 36.6666 20.6812 36.6666 23.3334V35H30V23.3334C30 22.4493 29.6488 21.6015 29.0237 20.9764C28.3985 20.3512 27.5507 20 26.6666 20C25.7826 20 24.9347 20.3512 24.3096 20.9764C23.6845 21.6015 23.3333 22.4493 23.3333 23.3334V35H16.6666V23.3334C16.6666 20.6812 17.7202 18.1377 19.5956 16.2623C21.4709 14.3869 24.0145 13.3334 26.6666 13.3334Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.99998 15H3.33331V35H9.99998V15Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66665 10C8.5076 10 9.99998 8.50766 9.99998 6.66671C9.99998 4.82576 8.5076 3.33337 6.66665 3.33337C4.8257 3.33337 3.33331 4.82576 3.33331 6.66671C3.33331 8.50766 4.8257 10 6.66665 10Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
            <a className="clickable" href="mailto:picasso-reincarnated@mamamia.com">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Email of Sean Craig</title>
                    <path d="M36.6666 9.99996C36.6666 8.16663 35.1666 6.66663 33.3333 6.66663H6.66665C4.83331 6.66663 3.33331 8.16663 3.33331 9.99996M36.6666 9.99996V30C36.6666 31.8333 35.1666 33.3333 33.3333 33.3333H6.66665C4.83331 33.3333 3.33331 31.8333 3.33331 30V9.99996M36.6666 9.99996L20 21.6666L3.33331 9.99996" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
        </div>
    );
};

export default Footer;