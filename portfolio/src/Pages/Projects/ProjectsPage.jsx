import { Outlet, useNavigate, useLocation } from "react-router";
import "./ProjectsPage.css"

export default function ProjectsPage () {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;
    
    return (
        <div className="page-layout">
            <header>
                <nav id="projects-navigation-bar" className="nav-bar">
                    <div id="projects-navigation-list" className="nav-list" >
                        <div className={"nav-element" + (currentPage === "/Projects/ProjectSummary" || currentPage === "/Projects" ? " active" : "")} onClick={() => navigate("/Projects/ProjectSummary")}>
                            <p>Summary</p>
                        </div>
                        <div className={"nav-element" + (currentPage.includes("/Projects/RecipeProject") ? " active" : "")} onClick={() => navigate("/Projects/RecipeProject")}>
                            <p>Recipe Project</p>
                        </div>
                        <div className={"nav-element" + (currentPage.includes("/Projects/MisacProject") ? " active" : "")} onClick={() => navigate("/Projects/MisacProject")}>
                            <p>Music Project</p>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="sub-page-layout">
                <Outlet/>
            </div>
        </div>
    )
}