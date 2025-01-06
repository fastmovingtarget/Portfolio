import { Outlet, useNavigate, useLocation } from "react-router";

export default function ProjectsPage () {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;
    
    return (
        <div className="page-layout">
            <header>
                <nav id="projects-navigation-bar" className="nav-bar">
                    <div id="projects-navigation-list" className="nav-list" >
                        <div className={"nav-element" + (currentPage === "/Projects/ProjectSummaryPage" || currentPage === "/Projects" ? " active" : "")} onClick={() => navigate("/Projects/ProjectSummaryPage")}>
                            <p>Summary</p>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="sub-page-layout page-body">
                <Outlet/>
            </div>
        </div>
    )
}