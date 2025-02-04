import ProjectThumbnail from "./ProjectThumbnail"
import bbsIngredientsSearch from "../../Videos/BBSIngredientsSearch.mp4"
import MisacPlay from "../../Videos/MisacPlay.mp4"

function HomePage () {
    const projects = [{
        name:"BestBeforeStart",
        videoSource:bbsIngredientsSearch,
        techStacks:["React", "MySQL", "node.js"],
        route:"../Projects/RecipeProject/Summary"
    },{
        name:"Misac",
        videoSource:MisacPlay,
        techStacks:["React", "HTML5", "CSS"],
        route:"../Projects/MisacProject/Summary"
    }]


    return (
        <div className="page-layout">
            <div className="projects-container row">
                {
                    projects.map((project, index) => <ProjectThumbnail key={"home-thumbnail-" + index} project={project}/>)
                }
            </div>
        </div>
    )
}

export default HomePage