import { Link } from "react-router-dom";
import cowTalkSVG from "../../../assets/cow-talk.svg";
import "./GuestHome.css";

/**
 * Guest view of top half of home page
 * @returns {JSX.Element}
 */
const GuestHome = () => {
    return (
        <div className="two-sides">
            <div className="left-side">
                <h1 className="big-doodledo">Doodledo</h1>
                <p className="home-text">Doodling doesn&apos;t have to be solitary...</p>
                <p className="home-text">it can be <span style={{color: "#7D5BC6"}}>collaborative</span>.</p>
                <div className="cowTalkContainer">
                    <img id="cowTalk" src={cowTalkSVG} alt="cow talking" />
                    <p className="home-text" id="cowQuote">Just try it!</p>
                </div>
            </div>
            <div className="right-side">
                <h2 id="canvas-text">Click on the canvas and begin!</h2>
                <Link to="/draw"><canvas id="homeCanvas" width="510rem" height="340rem"></canvas></Link>
            </div>
        </div>
    );
};

export default GuestHome;