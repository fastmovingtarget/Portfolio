import ProjectThumbnail from "./ProjectThumbnail"
import bbsIngredientsSearch from "../../Videos/BBSIngredientsSearch.mp4"
import MisacPlay from "../../Videos/MisacPlay.mp4"

function HomePage () {
    const projects = [{
        name:"BestBeforeStart",
        videoSource:bbsIngredientsSearch,
        techStacks:["React", "MySQL", "node.js"],
        route:"../Projects/RecipeProjectSummary"
    },{
        name:"Misac",
        videoSource:MisacPlay,
        techStacks:["React", "HTML5", "CSS"],
        route:"../Projects/RecipeProjectSummary"
    }]


    return (
        <div className="page-layout">
            <div className="projects-container row">
                {
                    projects.map(project => <ProjectThumbnail project={project}/>)
                }
            </div>
        </div>
    )
}

export default HomePage