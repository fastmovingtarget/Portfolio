import "./HomePage.css"
import { useNavigate } from "react-router";

function ProjectThumbnail ({project}) {
    const navigate = useNavigate();
     
     const playVideo = e => {
         e.target.play();
     }
     const stopVideo = e => {
         e.target.pause();
     }

    return (
        <div className="thumbnail-container" style={{transition: "all 0.5s"}}>
            <div className="tech-stack-container row">
                {project.techStacks.map((tech, index) => <p key={"tech-stack-" + index}>{tech}</p>)}
            </div>
            <video src={project.videoSource} alt="placeholder" onMouseOver={playVideo} onMouseOut={stopVideo} onClick={() => navigate(project.route)} style={{transition: "all 0.5s"}} muted loop width="500px"/>
        </div>
    )
}

export default ProjectThumbnail