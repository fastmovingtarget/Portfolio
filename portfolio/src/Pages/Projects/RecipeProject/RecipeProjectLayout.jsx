import { Outlet, useNavigate, useLocation } from "react-router";

export default function RecipeProjectPage () {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;
    
    return (
        <div className="page-layout">
            <header>
                <nav id="recipe-navigation-bar" className="nav-bar projects recipes">
                    <div id="recipesnavigation-list" className="nav-list projects recipes" >
                        <div className={"nav-element" + (currentPage === "/Projects/RecipeProject/Summary" || currentPage === "/Projects/RecipeProject" ? " active" : "")} onClick={() => navigate("/Projects/RecipeProject/Summary")}>
                            <p>Summary</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/Projects/RecipeProject/Thoughts" ? " active" : "")} onClick={() => navigate("/Projects/RecipeProject/Thoughts")}>
                            <p>Thoughts</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/Projects/RecipeProject/Features" ? " active" : "")} onClick={() => navigate("/Projects/RecipeProject/Features")}>
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