import "./HomePage.css"
import { Outlet, useNavigate, useLocation } from "react-router";
import {useState} from "react"


function ProjectThumbnail ({project}) {
    const navigate = useNavigate();
    const [videoStyles, setVideoStyles] = useState({
        transition: "all 1.5s"
     });    
     
     const playVideo = e => {
         e.target.play();
     }
     const stopVideo = e => {
         e.target.pause();
     }

    return (
        <div className="thumbnail-container" style={videoStyles}>
            <div className="tech-stack-container row">
                {project.techStacks.map(tech => <p>{tech}</p>)}
            </div>
            <video src={project.videoSource} alt="placeholder" onMouseOver={playVideo} onMouseOut={stopVideo} onClick={() => navigate(project.route)} style={videoStyles} muted loop width="500px"/>
        </div>
    )
}

export default ProjectThumbnail