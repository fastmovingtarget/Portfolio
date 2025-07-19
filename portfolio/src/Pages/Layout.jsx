import { Outlet, useNavigate } from "react-router";
import NavBar from "./NavBar";
import "./Layout.css"
//import HeaderImage from "../Images/Header.png"
//import HeaderImagePortrait from "../Images/HeaderPortrait.png"
import HeaderImage from "../Images/SharpPortfolio1000x1000.png"

function Layout() {
    const navigate = useNavigate();

    return (
        <div className="Layout">
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
            <div className="layout-main">
                <NavBar navigate={navigate}/>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;