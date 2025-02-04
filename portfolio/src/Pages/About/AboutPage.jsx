import { Outlet, useNavigate, useLocation } from "react-router";

export default function AboutPage () {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;

    return (
        <div className="page-layout">
            <header>
                <nav id="about-navigation-bar" className="nav-bar">
                    <div id="about-navigation-list" className="nav-list" >
                        <div className={"nav-element" + (currentPage === "/About/AboutSummaryPage" || currentPage === "/About" ? " active" : "")} onClick={() => navigate("/About/AboutSummaryPage")}>
                            <p>Summary</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/About/CVPage" ? " active" : "")} onClick={() => navigate("/About/CVPage")}>
                            <p>CV</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/About/EarlyHistory" ? " active" : "")} onClick={() => navigate("/About/EarlyHistory")}>
                            <p>Early History</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/About/University" ? " active" : "")} onClick={() => navigate("/About/University")}>
                            <p>Higher Education</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/About/Employment" ? " active" : "")} onClick={() => navigate("/About/Employment")}>
                            <p>Employment</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/About/Unemployment" ? " active" : "")} onClick={() => navigate("/About/Unemployment")}>
                            <p>Unemployment</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/About/Retraining" ? " active" : "")} onClick={() => navigate("/About/Retraining")}>
                            <p>Retraining</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/About/Hobbies" ? " active" : "")} onClick={() => navigate("/About/Hobbies")}>
                            <p>Hobbies</p>
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