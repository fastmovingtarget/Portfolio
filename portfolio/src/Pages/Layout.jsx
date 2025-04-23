import { Outlet, useNavigate, useLocation } from "react-router";
import NavBar from "./NavBar";
import "./Layout.css"
//import HeaderImage from "../Images/Header.png"
//import HeaderImagePortrait from "../Images/HeaderPortrait.png"
import HeaderImage from "../Images/SharpPortfolio1000x1000.png"
import resume from "../Resources/James Alport Resume 20250203.pdf"

function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateHandler = (path) => {
        console.log(path)
        navigate(path);
    }

    return (
        <div className="Layout">
            <header className="layout-header">
                <div id="header-image-container">
                    <img className="header-image" src={HeaderImage} alt="Target's Header"/>
                </div>
                <div id="header-items-container">
                    <h1><span className="name all">James Alport, </span> <span className="qualifications mobile">MSc, BSc </span></h1>
                    <h2>Full Stack Developer</h2>
                    <h3 className="summary 1 large">I graduated with from the University of Birmingham with a Batchelors Degree in Physics and a Masters Degree in Computer Science.</h3>
                    <h3 className="summary 2 large">Since then I have worked as a Software Developer at Theorem Solutions before moving on to working on my own projects and personal growth.</h3>
                    <h3 className="summary mobile">Software Developer, Theorem Solutions</h3>
                    <h3 className="summary mobile">Web and Mobile App Developer and Co-Founder, Seedhack</h3>
                    <h3><a href={resume} download>Download Resumé ⭳</a></h3>
                </div>
            </header>
            <div className="layout-main">
                <NavBar navigate={navigateHandler} currentPage={location.pathname}/>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;