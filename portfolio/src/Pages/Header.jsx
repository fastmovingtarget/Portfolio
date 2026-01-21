
import ExperimentBlue from "../Images/ExperimentBlue.png"
import ExperimentPurple from "../Images/ExperimentPurple.png"
import "./Header.css"

function Header() {
    return (
            <header className="layout-header">
                <div id="header-image-container" className="purple">
                    <img className="header-image purple" src={ExperimentPurple} alt="Target's Header"/>
                </div>
                <div id="header-image-container" className="blue">
                    <img className="header-image blue" src={ExperimentBlue} alt="Target's Header"/>
                </div>
                <div id="header-items-container">
                    <h1 className="nameplate large">James Alport </h1>
                    <h1 className="nameplate small">James Alport, MSc, BSc </h1>
                    <h2 className="nameplate large">Full Stack Developer</h2>
                    <h3 className="summary 1 large">MSc Computer Science, BSc Physics</h3>
                </div>
            </header>
    );
}

export default Header;