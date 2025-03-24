import { Outlet, useNavigate, useLocation } from "react-router";
import "./Layout.css"
//import HeaderImage from "../Images/Header.png"
//import HeaderImagePortrait from "../Images/HeaderPortrait.png"
import HeaderImage from "../Images/SharpPortfolio1000x1000.png"
import resume from "../Resources/James Alport Resume 20250203.pdf"

function Layout() {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;

    return (
        <div className="Layout">
            <header className="layout-header">
                <div id="header-image-container">
                    <img className="header-image" src={HeaderImage} alt="Target's Header"/>
                </div>
                <div id="header-items-container">
                    <h1>James Alport</h1>
                    <h2>Full Stack Developer</h2>
                    <h3 className="summary-1">I graduated with from the University of Birmingham with a Batchelors Degree in Physics and a Masters Degree in Computer Science.</h3>
                    <h3 className="summary-2">Since then I have worked as a Software Developer at Theorem Solutions before moving on to working on my own projects and personal growth.</h3>
                    <h3><a href={resume} download>Download Resumé ⭳</a></h3>
                </div>
            </header>
            <div className="layout-main">
                <nav id="navigation-bar" className="nav-bar">
                    <div id="navigation-list" className="nav-list" >
                        <div className={"nav-element tier-1" + (currentPage.includes("/Home") || currentPage === ("/") ? " active" : "")} onClick={() => navigate("/Home")}>
                            <p>Home</p>
                        </div>
                        <div className={"nav-element tier-1" + (currentPage.includes("/Projects") ? " active" : "")} onClick={() => navigate("/Projects")}>
                            <p>Projects</p>
                        </div>
                        <div className={"nav-element tier-1" + (currentPage.includes("/About") ? " active" : "")} onClick={() => navigate("/About")}>
                            <p>About Me</p>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;