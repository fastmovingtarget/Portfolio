import HeaderImage from "../Images/SharpPortfolio1000x1000.png"
import "./Header.css"

function Header() {
    return (
            <header className="layout-header">
                <div id="header-image-container">
                    <img className="header-image" src={HeaderImage} alt="Target's Header"/>
                </div>
                <div id="header-items-container">
                    <h1 className="nameplate large">James Alport </h1>
                    <h1 className="nameplate small">James Alport, MSc, BSc </h1>
                    <h2>Full Stack Developer</h2>
                    <h3 className="summary 1 large">MSc Computer Science, BSc Physics</h3>
                </div>
            </header>
    );
}

export default Header;