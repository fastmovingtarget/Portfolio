import { Outlet, useNavigate, useLocation } from "react-router";
import "./Layout.css"
import HeaderImage from "../Images/Header.png"
import HeaderImagePortrait from "../Images/HeaderPortrait.png"
import reactImage from "../Images/tech_react.png"
import nodeImage from "../Images/tech_node.png"
import mysqlImage from "../Images/tech_mysql.png"
import githubImage from "../Images/tech_github.png"
import azureImage from "../Images/tech_azure.png"
import cImage from "../Images/tech_c.png"
import cppImage from "../Images/tech_cpp.png"
import csharpImage from "../Images/tech_csharp.png"
import javaImage from "../Images/tech_java.png"

function Layout() {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;

    return (
        <div className="Layout">
            <header className="layout-header column">
                <img className="header-image-landscape" src={HeaderImage} alt="Target's Header"/>
                <img className="header-image-portrait" src={HeaderImagePortrait} alt="Target's Header"/>
                <div id="header-items-container">
                    <div className="tech-stacks column">
                        <div className="row">
                            <img className="tech_stack hoverable" src={reactImage} alt="React logo" height="80px"/>
                            <img className="tech_stack hoverable" src={nodeImage} alt="Node logo" height="80px"/>
                            <img className="tech_stack hoverable" src={mysqlImage} alt="Html, javascript and CSS logo" height="80px"/>
                            <img className="tech_stack hoverable" src={githubImage} alt="Html, javascript and CSS logo" height="80px"/>
                        </div>                        
                        <div className="row">
                            <img className="tech_stack hoverable" src={azureImage} alt="Azure logo" height="80px"/>
                            <img className="tech_stack hoverable" src={cImage} alt="C logo" height="80px"/>
                            <img className="tech_stack hoverable" src={cppImage} alt="Html, javascript and CSS logo" height="80px"/>
                            <img className="tech_stack hoverable" src={csharpImage} alt="Html, javascript and CSS logo" height="80px"/>
                            <img className="tech_stack hoverable" src={javaImage} alt="Html, javascript and CSS logo" height="80px"/>
                        </div>
                    </div>
                    <div className="text-summary-container">
                        <h1>Hi, I'm James Alport a.k.a. fastmovingtarget!</h1>
                        <h2>I'm a Full Stack Web Developer, currently looking for work.</h2>
                        <h3 className="summary-1">I graduated with from the University of Birmingham with a Batchelors Degree in Physics and a Masters Degree in Computer Science.</h3>
                        <h3 className="summary-2">Since then I have worked as a Software Developer at Theorem Solutions before moving on to working on my own projects and personal growth.</h3>
                    </div>
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