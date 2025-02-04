import {useState} from "react"
import RecipeProjectFeature from "./RecipeProjectFeature"
import ingSearch        from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSIngredientsSearch.mp4"
import ingEdit          from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSIngredientsEditandReset.mp4"
import ingFreeze        from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSIngredientsFreeze.mp4"
import ingDelete        from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSIngredientsDelete.mp4"
import ingSubmit        from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSIngredientsSubmit.mp4"
import recSubmit        from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSRecipeAddNew.mp4"
import recEdit          from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSRecipeEdit.mp4"
import recSearch        from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSRecipe.mp4"
import recDelete        from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSRecipeDelete.mp4"
import recActivate      from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSRecipeActivate.mp4"
import plnAdd           from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSPlannerAdd.mp4"
import plnReserve       from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSPlannerReserver.mp4"
import plnCancel        from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSPlannerCancelReservation.mp4"
import shpAdd           from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSShopAdd.mp4"
import shpBuy           from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSShopBuyandEdit.mp4"
import shpEditandDelete from "../../../Videos/TinyTest.mp4"//"../../../Videos/BBSShopEditandDelete.mp4"

export default function RecipeProjectFeatures () {

    const [ingredientsVisible, setIngredientsVisible] = useState(false)
    const [recipesVisible, setRecipesVisible] = useState(false)
    const [plannerVisible, setPlannerVisible] = useState(false)
    const [shopListVisible, setShopListVisible] = useState(false)

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
            }
        ],
        planner:[{
                name:"Add Plan",
                video:plnAdd,
                text:"The planner was the first major expansion to my initial concept. I'd found it a pain to use the app piece-by-piece to add ingredients to the shopping list and the ingredients list and then remove them when cooking." + 
                " I thought it would be far better to have a cntralised calendar using the user's recipes that the user could assign ingredients to and add shopping list items for. " + 
                " The first thing I did was made the calendar, which took a surprising amount of algorithmic code to populate correctly, then I added an activatable element based on the code I'd used in the Recipes tab. " + 
                " This active date element would contain a list of planned recipes and a searchable list of potential recipes."
            },{
                name:"View and Reserve Plan Ingredients",
                video:plnReserve,
                text:"The most obvious use-case for the planner was to assign ingredient to planned recipes.  Selecting a recipe ingredient brings up a list of ingredients in the inventory, excluding already reserved ingredients and ingredients with insufficient quantity. " + 
                "With this there are two possible cases: that there's too much of the inventory ingredient and it needs to be split into a reserved and an unreserved ingredient, or that there's exactly enough of the inventory ingredient and it needs to be flagged as reserved. " + 
                "Keeping track of which ingredients were reserved and which ingredients were still needed for the recipe was one of the tougher challenges of making the app."
            },{
                name:"Cancel Reserved Ingredients",
                video:plnCancel,
                text:"Deleting and re-creating ingredients would be incredibly annoying, so making a cancel button for reservations was a must. " + 
                "The functionality was quite easy for the ingredients that were not split, but I wanted to also be able to return an ingredient to its originator. " + 
                "I implemented checks to ensure that this was only done when the original ingredient still had the same name and date as the ingredient that's been split off."
            },{
                name:"Add to Shopping List",
                video:plnCancel,
                text:"Once I'd implemented the Shopping List tab, it was an obvious use case to allow the user to add to the shopping list from the planner. " + 
                "The shopping list item would store the information on the recipe plan and ingredient that it came from, and take that over to the Ingredients tab when bought."
            }
        ],
        shoppingList:[{
                name:"Submit Item to Shopping List",
                video:shpAdd,
                text:"The only data we record when adding an item from this page is the name and the quantity - there's not much reason to over-complicate it. " + 
                "For purposes of adding items from a recipe plan the database does store plan and recipe ingredient ids to link, but adding an item without them just stores them as null."
            },{
                name:"Buy from Shopping List",
                video:shpBuy,
                text:"Buying an item from the shopping list adds that item to the Ingredients data and deletes it from the Shopping List. If the shopping list item is associated with a plan, that will be transferred as well. " + 
                "We change the plan's data in order to reflect that a shop is no longer required. " + 
                "When an item is bought it will obviously have no expiry date until the user enters it in - we've highlighted in red the items that require editing on that front."
            },{
                name:"Edit and Delete Shopping List Item",
                video:shpEditandDelete,
                text:"Lastly, as with the rest of the data items in this application, shopping list data can be both edited and deleted. When deleted, an item with a plan association will need to be re-added if it's still needed for the plan"
            }
        ]

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
                        <RecipeProjectFeature feature={feature} index={index} isVisible={recipesVisible} key={"recipe"+index}/>
                    ))}
                </div>
            </div>
            <div className="planner-features-container column">
                <div className="hoverable clickable row" onClick={() => setPlannerVisible(!plannerVisible)}>
                    <div className={"collapse-arrow " + (plannerVisible ? "uncollapsed" : "collapsed")}><h4>{"\u25b6 "}</h4></div><h4> Planner</h4>
                </div>
                <div>
                    {features.planner.map((feature, index) => (
                        <RecipeProjectFeature feature={feature} index={index} isVisible={plannerVisible} key={"planner"+index}/>
                    ))}
                </div>
            </div>
            <div className="planner-features-container column">
                <div className="hoverable clickable row" onClick={() => setShopListVisible(!shopListVisible)}>
                    <div className={"collapse-arrow " + (shopListVisible ? "uncollapsed" : "collapsed")}><h4>{"\u25b6 "}</h4></div><h4> Shopping List</h4>
                </div>
                <div>
                    {features.shoppingList.map((feature, index) => (
                        <RecipeProjectFeature feature={feature} index={index} isVisible={shopListVisible} key={"ingredient"+index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}