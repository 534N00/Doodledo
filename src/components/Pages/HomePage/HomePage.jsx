// import Header from '../../Spans/Header/Header';
// import Footer from '../../Spans/Footer/Footer';
import PropTypes from 'prop-types';
import GuestHome from '../../Spans/GuestHome/GuestHome';
import UserHome from '../../Spans/UserHome/UserHome';
import './HomePage.css';

const HomePage = ({ supabase, UID }) => {
    return (
        <div>
            <div className="top-half">
                {/* Whether to render guest home view or signed-in home view */}
                {UID == '' ? (<GuestHome />) : (<UserHome />)}
                <svg width="91" height="28" viewBox="0 0 91 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_dd_180_120)">
                        <path d="M6.75 2L45.5 18L84.25 2" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"/>
                    </g>
                    <defs>
                        <filter id="filter0_dd_180_120" x="0.749474" y="-0.000488281" width="89.5011" height="28.0005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_180_120"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="effect1_dropShadow_180_120" result="effect2_dropShadow_180_120"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_180_120" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="bottom-half">
                <h1 className="recent-text">Recently Drawn Up</h1>
            </div>
        </div>
    );
}

HomePage.propTypes = {
    supabase: PropTypes.object,
    UID: PropTypes.string
}

export default HomePage;