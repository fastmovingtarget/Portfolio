import EarlyHistory from "./EarlyHistory"
import University from "./University"
import Employment from "./Employment"
import Unemployment from "./Unemployment"
import Retraining from "./Retraining"
import Hobbies from "./Hobbies"

export default function AboutPage () {

    return (
        <div>
            <h2>About Me:</h2>
            <div>
                <h4>Name: James Alport</h4>
                <h4>Role: Full Stack Web Developer</h4>                
            </div>
            <div>
                <h4>Summary</h4>
                <p>Hello, my name is James and I'm a software developer. I graduated University with degrees in Physics and Computer Science, then worked as a Software Developer at Theorem Solutions for 4 years, using C, C++, C#, .NET and Java 
                    before eventually leaving to give myself oppourtunities to grow as a person. Since then I've moved my skills towards Web Development with Javascript, React and nodejs.
                </p>
            </div>
            <div>
                <EarlyHistory/>
                <University/>
                <Employment/>
                <Unemployment/>
                <Retraining/>                
            </div>
            <div>
                <Hobbies/>
            </div>
        </div>
    )
}