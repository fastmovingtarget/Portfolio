import {useState} from "react"
import MisacProjectFeature from "./MisacProjectFeature"

export default function RecipeProjectFeatures () {

    const [ingredientsVisible, setIngredientsVisible] = useState(false)
    const [recipesVisible, setRecipesVisible] = useState(false)
    const [plannerVisible, setPlannerVisible] = useState(false)
    const [shopListVisible, setShopListVisible] = useState(false)

    const features = {
        ingredients:[],
        recipes:[],
        planner:[],
        shoppingList:[]

    }

    return (
        <div className="feature-breakdown-container">
            <div className="ingredients-features-container column">
                <div className="hoverable clickable row" onClick={() => setIngredientsVisible(!ingredientsVisible)}>
                    <div className={"collapse-arrow " + (ingredientsVisible ? "uncollapsed" : "collapsed")}><h4>{"\u25b6 "}</h4></div><h4> Ingredients</h4>
                </div>
                <div>
                    {features.ingredients.map((feature, index) => (
                        <MisacProjectFeature feature={feature} index={index} isVisible={ingredientsVisible} key={"ingredient"+index}/>
                    ))}
                </div>
            </div>
            <div className="recipes-features-container column">
                <div className="hoverable clickable row" onClick={() => setRecipesVisible(!recipesVisible)}>
                    <div className={"collapse-arrow " + (recipesVisible ? "uncollapsed" : "collapsed")}><h4>{"\u25b6 "}</h4></div><h4> Recipes</h4>
                </div>
                <div>
                    {features.recipes.map((feature, index) => (
                        <MisacProjectFeature feature={feature} index={index} isVisible={recipesVisible} key={"recipe"+index}/>
                    ))}
                </div>
            </div>
            <div className="planner-features-container column">
                <div className="hoverable clickable row" onClick={() => setPlannerVisible(!plannerVisible)}>
                    <div className={"collapse-arrow " + (plannerVisible ? "uncollapsed" : "collapsed")}><h4>{"\u25b6 "}</h4></div><h4> Planner</h4>
                </div>
                <div>
                    {features.planner.map((feature, index) => (
                        <MisacProjectFeature feature={feature} index={index} isVisible={plannerVisible} key={"planner"+index}/>
                    ))}
                </div>
            </div>
            <div className="planner-features-container column">
                <div className="hoverable clickable row" onClick={() => setShopListVisible(!shopListVisible)}>
                    <div className={"collapse-arrow " + (shopListVisible ? "uncollapsed" : "collapsed")}><h4>{"\u25b6 "}</h4></div><h4> Shopping List</h4>
                </div>
                <div>
                    {features.shoppingList.map((feature, index) => (
                        <MisacProjectFeature feature={feature} index={index} isVisible={shopListVisible} key={"ingredient"+index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}