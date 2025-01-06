import { Outlet, useNavigate, useLocation } from "react-router";
import "./Layout.css"
import HeaderImage from "../Images/Header.png"

function Layout() {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;

    console.log(currentPage)
    return (
        <div className="Layout">
            <header className="layout-header column">
                <img className="header-image" src={HeaderImage} alt="Target's Header"/>
                <nav id="navigation-bar" className="nav-bar">
                    <div id="navigation-list" className="nav-list" >
                        <div className={"nav-element tier-1" + (currentPage.includes("/Home") || currentPage.includes("/") ? " active" : "")} onClick={() => navigate("/Home")}>
                            <p>Home</p>
                        </div>
                        <div className={"nav-element tier-1" + (currentPage.includes("/About") ? " active" : "")} onClick={() => navigate("/About")}>
                            <p>About</p>
                        </div>
                        <div className={"nav-element tier-1" + (currentPage.includes("/Projects") ? " active" : "")} onClick={() => navigate("/Projects")}>
                            <p>Projects</p>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

export default Layout;