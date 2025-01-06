import ProjectThumbnail from "./ProjectThumbnail"
import bbsIngredientsSearch from "../../Videos/BBSIngredientsSearch.mp4"

function HomePage () {
    const projects = [{
        name:"BestBeforeStart",
        videoSource:bbsIngredientsSearch,
        techStacks:["React", "MySQL", "node.js"],
        route:"../Projects/BestBeforeStart"
    }]


    return (
        <div className="page-layout">
            {
                projects.map(project => <ProjectThumbnail project={project}/>)
            }
        </div>
    )
}

export default HomePage