import { Outlet, useNavigate, useLocation } from "react-router";

export default function MisacProjectPage () {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;
    
    return (
        <div className="page-layout">
            <header>
                <nav id="recipe-navigation-bar" className="nav-bar projects misac">
                    <div id="misac-navigation-list" className="nav-list projects misac" >
                        <div className={"nav-element" + (currentPage === "/Projects/MisacProject/Summary" || currentPage === "/Projects/MisacProject" ? " active" : "")} onClick={() => navigate("/Projects/MisacProject/Summary")}>
                            <p>Summary</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/Projects/MisacProject/Thoughts" ? " active" : "")} onClick={() => navigate("/Projects/MisacProject/Thoughts")}>
                            <p>Thoughts</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/Projects/MisacProject/Features" ? " active" : "")} onClick={() => navigate("/Projects/MisacProject/Features")}>
                            <p>Features</p>
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