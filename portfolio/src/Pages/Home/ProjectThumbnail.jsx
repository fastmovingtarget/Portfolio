import "./HomePage.css"
import { useNavigate } from "react-router";

function ProjectThumbnail ({project}) {
    const navigate = useNavigate();
    
    var isPlaying = false; 

     const playVideo = e => {
        if(!isPlaying)
             e.target.play();
     }
     const stopVideo = e => {
        if(isPlaying)
            e.target.pause();
     }

    return (
        <div className="thumbnail-container" style={{transition: "all 0.5s"}}>
            <h4>{project.name}</h4>
            {project.videoSource ? 
                <>
                    <div className="tech-stack-container absolute">
                        {project.techStacks.map((tech, index) => <p key={"tech-stack-" + index}>{tech}</p>)}
                    </div>
                    <video src={project.videoSource} alt="placeholder" 
                        onMouseOver={playVideo} onMouseOut={stopVideo} onPlaying={() => isPlaying = true} onPause={() => isPlaying = false} onClick={() => navigate(project.route)}
                        style={{transition: "all 0.5s"}} muted loop width="500px"/> 
                </>:
                <div className="thumbnail-placeholder">
                    <div className="tech-stack-container">
                        {project.techStacks.map((tech, index) => <p key={"tech-stack-" + index}>{tech}</p>)}
                    </div>
                    <p>{project.description}</p>
                </div>}
        </div>
    )
}

export default ProjectThumbnail