import ProjectThumbnail from "./ProjectThumbnail"
import reactImage from "../../Images/tech_react.png"
import nodeImage from "../../Images/tech_node.png"
import mysqlImage from "../../Images/tech_mysql.png"
import azureImage from "../../Images/tech_azure.png"
import cImage from "../../Images/tech_c.png"
import cppImage from "../../Images/tech_cpp.png"
import csharpImage from "../../Images/tech_csharp.png"
import javaImage from "../../Images/tech_java.png"
import bbsIngredientsSearch from "../../Videos/BBSIngredientsSearch.mp4"
import MisacPlay from "../../Videos/MisacPlay.mp4"

function HomePage () {
    const projects = [{
        name:"BestBeforeStart",
        videoSource:bbsIngredientsSearch,
        techStacks:["React", "MySQL", "node.js", "Azure", "JavaScript"],
        route:"../Projects/RecipeProject/Summary"
    },{
        name:"Misac",
        videoSource:MisacPlay,
        techStacks:["React", "HTML5", "CSS", "JavaScript"],
        route:"../Projects/MisacProject/Summary"
    },{
        name:"MyFracture",
        videoSource:null,
        description:"An NHS funded project for Android and IOS intended to help patients navigate through injuries post-surgery.",
        techStacks:["Meteor", "MongoDB", "node.js", "CSS", "JavaScript"],
        route:"../Projects/MyFracture/Summary"
    },{
        name:"CADViewer",
        videoSource:null,
        techStacks:["C++", "C#", ".NET", "OpenInventor"],
        route:"../Projects/CADViewer/Summary"
    },{
        name:"TPM",
        videoSource:null,
        techStacks:["Java", "MySQL"],
        route:"../Projects/TPM/Summary"
    },{
        name:"Masters Project",
        videoSource:null,
        techStacks:["Java"],
        route:"../Projects/MastersProject/Summary"
    }]


    return (
        <div className="page-layout row">          
            <div className="tech-stacks column">
                <h4 className="tech_stack hoverable" alt="Show All Projects" height="80px">All</h4>
                <img className="tech_stack hoverable" src={reactImage} alt="React logo" height="80px" width="80px"/>
                <img className="tech_stack hoverable" src={nodeImage} alt="Node logo" height="80px"/>
                <img className="tech_stack hoverable" src={mysqlImage} alt="MySQL logo" height="80px"/>
                <img className="tech_stack hoverable" src={azureImage} alt="Azure logo" height="80px"/>
                <img className="tech_stack hoverable" src={cImage} alt="C logo" height="80px"/>
                <img className="tech_stack hoverable" src={cppImage} alt="C++ logo" height="80px"/>
                <img className="tech_stack hoverable" src={csharpImage} alt="C# logo" height="80px"/>
                <img className="tech_stack hoverable" src={javaImage} alt="Java logo" height="80px"/>
            </div>
            <div className="projects-container">
                {
                    projects.map((project, index) => <ProjectThumbnail key={"home-thumbnail-" + index} project={project}/>)
                }
            </div>
        </div>
    )
}

export default HomePage