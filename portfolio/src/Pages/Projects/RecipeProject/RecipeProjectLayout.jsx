import { Outlet, useNavigate, useLocation } from "react-router";

export default function RecipeProjectPage () {
    const navigate = useNavigate();
    const currentPage = useLocation().pathname;
    
    return (
        <div className="page-layout">
            <header>
                <nav id="recipe-navigation-bar" className="nav-bar projects recipes">
                    <div id="recipesnavigation-list" className="nav-list projects recipes" >
                        <div className={"nav-element" + (currentPage === "/Projects/RecipeProject/RecipeProjectSummary" || currentPage === "/Projects/Recipe/" ? " active" : "")} onClick={() => navigate("/Projects/RecipeProject/RecipeProjectSummary")}>
                            <p>Summary</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/Projects/RecipeProject/RecipeProjectThoughts" ? " active" : "")} onClick={() => navigate("/Projects/RecipeProject/RecipeProjectThoughts")}>
                            <p>Thoughts</p>
                        </div>
                        <div className={"nav-element" + (currentPage === "/Projects/RecipeProject/RecipeProjectFeatures" ? " active" : "")} onClick={() => navigate("/Projects/RecipeProject/RecipeProjectFeatures")}>
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