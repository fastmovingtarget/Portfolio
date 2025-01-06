import "./HomePage.css"
import { Outlet, useNavigate, useLocation } from "react-router";


function ProjectThumbnail ({project}) {
    const navigate = useNavigate();

    return (
        <div className="thumbnail-container">
            <div className="tech-stack-container row">
                {project.techStacks.map(tech => <p>{tech}</p>)}
            </div>
            <video src={project.videoSource} alt="placeholder" onMouseOver={e => {e.target.play()}} onMouseOut={e => {e.target.pause()}} onClick={() => navigate(project.route)}/>
        </div>
    )
}

export default ProjectThumbnail