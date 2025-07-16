import "./ProjectsPage.css"

export default function ProjectsPage () {
    
    return (
        <div>
            <h2>Current Projects:</h2>
            <div>
                <h4>Finished Projects</h4>
                <ul>
                    <li>Recipe Web App - Initial Deployment</li>
                    <li>Music Notation Learning Web App</li>
                    <li>Music Notation Learning App - React Native</li>
                    <li>Portfolio Web Site</li>
                </ul>
            </div>
            <div>
                <h4>What I'm working on:</h4>
                <ul>
                    <li>Recipe App - React Native</li>
                    <li>Recipe App - .NET Core API</li>
                    <li>Snacker Tracker - React Native</li>
                </ul>
            </div>
            <div>
                <h4>My GitHub:</h4>
                <a className="hyperlink" href="https://github.com/fastmovingtarget">https://github.com/fastmovingtarget</a>
            </div>
        </div>
    )
}