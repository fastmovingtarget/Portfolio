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
            <h4>{project.name}</h4>
            <div className="tech-stack-container row">
                {project.techStacks.map((tech, index) => <p key={"tech-stack-" + index}>{tech}</p>)}
            </div>
            {project.videoSource ? 
                <video src={project.videoSource} alt="placeholder" onMouseOver={playVideo} onMouseOut={stopVideo} onClick={() => navigate(project.route)} style={{transition: "all 0.5s"}} muted loop width="500px"/> :
                <div className="thumbnail-placeholder">
                    <p>{project.description}</p>
                </div>}
        </div>
    )
}

export default ProjectThumbnail