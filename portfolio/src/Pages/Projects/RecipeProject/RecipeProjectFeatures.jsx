import {useState} from "react"
import RecipeProjectFeature from "./RecipeProjectFeature"
import ingSearch from "../../../Videos/BBSIngredientsSearch.mp4"
import ingEdit from "../../../Videos/BBSIngredientsEditandReset.mp4"
import ingFreeze from "../../../Videos/BBSIngredientsFreeze.mp4"
import ingDelete from "../../../Videos/BBSIngredientsDelete.mp4"
import ingSubmit from "../../../Videos/BBSIngredientsSubmit.mp4"
import recSubmit from "../../../Videos/BBSRecipeAddNew.mp4"
import recEdit from "../../../Videos/BBSRecipeEdit.mp4"
import recSearch from "../../../Videos/BBSRecipe.mp4"
import recDelete from "../../../Videos/BBSRecipeDelete.mp4"
import recActivate from "../../../Videos/BBSRecipeActivate.mp4"

export default function RecipeProjectFeatures () {

    const [ingredientsVisible, setIngredientsVisible] = useState(false)
    const [recipesVisible, setRecipesVisible] = useState(false)

    const features = {
        ingredients:[{
                name:"Ingredient Submit",
                video:ingSubmit,
                text:"The ingredients data that I chose to store is fairly simple: a name string, an expiry date and a quantity number. " + 
                " Submitting sends it through to the database, but in accordance with restful API principles it alters the cached data rather than immediately re-Search-ing the database."
            },{
                name:"Ingredient Search",
                video:ingSearch,
                text:"The search is only by ingredient name at this time - adding filters to my search functions is one of my next critical milestones. " + 
                "I wanted the search to work in real time, so it works from an onChange event listener rather than requiring a submit button"
            },{
                name:"Ingredient Edit",
                video:ingEdit,
                text:"I added this surprisingly late in the development cycle - given that the ingredient information was so simple it seemed easier to delete and re-add than it was to add edit functionality. " + 
                "What eventually drove me to change that was the functionality to add from the shopping list - I wanted that process to be as simple as possible but didn't want to be making assumptions about what dates were valid, " + 
                "so I chose to instead leave the date blank and highlight it in the ingredients tab for editing instead."
            },{
                name:"Ingredient Freeze",
                video:ingFreeze,
                text:"This was one of the first features I added to the ingredients list, a functionality that seemed pretty obvious to me. " + 
                "Freezing an ingredient obviously prevents it from being registered as expired, but when unfrozen it returns to its original date. " + 
                "My logic to this is that once you un-freeze something you almost always want to be eating it on the same day, but I would like to do some research into the effects of freezing food and re-implement this functionality."
            },{
                name:"Ingredient Delete",
                video:ingDelete,
                text:"In many ways deletion has always been the simplest functionality of all. " + 
                "Click delete and a DELETE message is sent to the API server, it deletes from the database and returns the affected rows. " + 
                "If the affected rows >= 1 then the cache deletes that ingredient as well."
            }
        ],
        recipes:[{
            name:"Recipe Submit",
            video:recSubmit,
            text:"The recipe data stored is far more complex than the ingredients. " + 
            " The database entry stores the recipe name, time, difficulty and instructions (as a JSON). Recipe ingredients have a seperate table linked to the recipe table via a foreign key." +
            " This table allows for the ingredient manipulation in the planner. The recipe instructions are implemented in a way that even to this day I consider quite awkward." + 
            " I'd hoped to allow the user to schedule multiple smaller instructions and with the option to do multiple things at the same time (rather than a monolithic block of text) but I never completed it to my satisfaction." + 
            " Another feature do to be polished during my revisit."
        },{
            name:"Recipe Search",
            video:recSearch,
            text: "The search function works in a similar way to the ingredients - complete with very little options to filter it. Given that there's a lot of info I'm not using in the recipes data, there's a lot of filters I could implement as well in my second pass."
        },{
            name:"Recipe Activation",
            video:recActivate,
            text: "It became quite obvious early on that making the smaller 3-per-row cards work with the amount of data they needed was an exercise in futility." + 
            " To make the information more visible I decided to implement an 'Active' tile that would display all of the recipe's data. This would be activated by clicking the card and changed/deactivated by clicking outside of the container."
        },{
            name:"Recipe Edit",
            video:recEdit,
            text: "Editing the recipe is simple on the surface, but the usage of the individual recipe ingredients threw a bit more comlpexity in." + 
            " As a result during a query I need to run a delete on all the recipe ingredients not present in the API UPDATE request body and then upsert ingredients in the body object." + 
            " This works well, but requires two different results to test when updating the local cache. I did at one point do the same thing for the recipe's instructions before moving it over to a JSON object."
        },{
            name:"Recipe Delete",
            video:recDelete,
            text: "The delete capability is once again a simple request with a single ID. The recipe ingredients associated with the recipe are deleted as part of MySQL's cascade functionality and a successful delete is carried over to the cache."
        }]


    }

    return (
        <div className="feature-breakdown-container">
            <div className="ingredients-features-container column">
                <div className="hoverable clickable row" onClick={() => setIngredientsVisible(!ingredientsVisible)}>
                    <div className={"collapse-arrow " + (ingredientsVisible ? "uncollapsed" : "collapsed")}><h4>{"\u25b6 "}</h4></div><h4> Ingredients</h4>
                </div>
                <div>
                    {features.ingredients.map((feature, index) => (
                        <RecipeProjectFeature feature={feature} index={index} isVisible={ingredientsVisible} key={"ingredient"+index}/>
                    ))}
                </div>
            </div>
            <div className="recipes-features-container column">
                <div className="hoverable clickable row" onClick={() => setRecipesVisible(!recipesVisible)}>
                    <div className={"collapse-arrow " + (recipesVisible ? "uncollapsed" : "collapsed")}><h4>{"\u25b6 "}</h4></div><h4> Recipes</h4>
                </div>
                <div>
                    {features.recipes.map((feature, index) => (
                        <RecipeProjectFeature feature={feature} index={index} isVisible={recipesVisible} key={"ingredient"+index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}