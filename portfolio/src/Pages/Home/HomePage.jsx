import ProjectThumbnail from "./ProjectThumbnail"
import reactImage from "../../Images/tech_react.png"
import reactNativeImage from "../../Images/tech_native.png"
import nodeImage from "../../Images/tech_node.png"
import mysqlImage from "../../Images/tech_mysql.png"
import azureImage from "../../Images/tech_azure.png"
import cImage from "../../Images/tech_c.png"
import cppImage from "../../Images/tech_cpp.png"
import csharpImage from "../../Images/tech_csharp.png"
import javaImage from "../../Images/tech_java.png"
import bbsIngredientsSearch from "../../Videos/BBSIngredientsSearch.mp4"
import MisacPlay from "../../Videos/MisacPlay.mp4"
import React, {useState} from "react"

function HomePage () {

    const [clickedTech, setClickedTech] = useState(null)

    const projects = [{
        name:"BestBeforeStart",
        videoSource:bbsIngredientsSearch,
        techStacks:["React Native", "React", "MySQL", "node.js", "Azure", "JavaScript"],
        route:"../Home/Projects/RecipeProject"
    },{
        name:"Misac",
        videoSource:MisacPlay,
        techStacks:["React Native", "React", "HTML5", "CSS", "JavaScript"],
        route:"../Home/Projects/MisacProject"
    },{
        name:"MyFracture",
        videoSource:null,
        description:"An NHS funded project for Android and IOS intended to help patients navigate through injuries post-surgery.",
        techStacks:["Meteor", "MongoDB", "node.js", "CSS", "JavaScript"],
        route:"../Home/Projects/MyFracture"
    },{
        name:"CADViewer",
        videoSource:null,
        description:"A program designed to convert CAD files into a viewable format. Eventually folded into a unified UI with an improved process manager.",
        techStacks:["C++", "C#", ".NET", "C"],
        route:"../Home/Projects/CADViewer"
    },{
        name:"TPM",
        videoSource:null,
        description:"A Process Manager built to allow users to track and queue conversions from one CAD format to another.",
        techStacks:["Java", "MySQL"],
        route:"../Home/Projects/TPM"
    },{
        name:"Masters Project",
        videoSource:null,
        description:"A program and UI that allows the user to calculate the age of a galaxy based on its spectrum and two control sample spectra using matrix deconvolution.",
        techStacks:["Java"],
        route:"../Home/Projects/MastersProject"
    }]

    const techStacks = [{
        name:"React Native",
        image:reactNativeImage,
    },{
        name:"React",
        image:reactImage,
    },{
        name:"node.js",
        image:nodeImage,
    },{
        name:"MySQL",
        image:mysqlImage,
    },{
        name:"Azure",
        image:azureImage,
    },{
        name:"C",
        image:cImage,
    },{
        name:"C++",
        image:cppImage,
    },{
        name:"C#",
        image:csharpImage,
    },{
        name:"Java",
        image:javaImage,
    }]

    return (
        <div className="page-layout row" id="home-page">          
            <div className="tech-stacks column">
                <h4 className={`tech_stack hoverable ${!clickedTech ? " clicked" : ""}`} alt="Show All Projects" height="80px" onClick={() => setClickedTech(null)}>All</h4>
                {techStacks.map((item, index) => 
                    (<img className={`tech_stack hoverable ${clickedTech && clickedTech.name === item.name ? " clicked" : ""}`} src={item.image} key={`${item.name}-technology`}alt={`${item.name} logo`} height="80px" onClick={() => setClickedTech(item)}/>))
                }
            </div>
            <div className="projects-container">
                {
                    projects.filter((project) => !clickedTech || project.techStacks.includes(clickedTech.name))
                        .map((project, index) => <ProjectThumbnail key={"home-thumbnail-" + index} project={project}/>)
                }
            </div>
        </div>
    )
}

export default HomePage