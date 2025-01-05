import { Outlet, useNavigate, useLocation } from "react-router";
import "./Layout.css"
import HeaderImage from "../Images/Header.png"

function Layout() {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;
    return (
        <div className="Layout">
            <header className="layout-header column">
                <img className="header-image" src={HeaderImage} alt="Target's Header"/>
                <nav id="navigation-bar" className="nav-bar">
                    <div id="navigation-list" className="nav-list" >
                        <div className={currentPage === "/Home" ? "nav-element active" : "nav-element"} onClick={() => navigate("/Home")}>
                            <p>Home</p>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="page-layout">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;