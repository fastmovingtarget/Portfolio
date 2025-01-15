export default function MisacProjectThoughts () {

    return (
        <div>
            <h2>Reflections on the Misac Music Project so far:</h2>
            
                
            <div>
                <ul>
                    <h4>What I hoped to accomplish:</h4>
                    <li className="hoverable">Take a break from 6 months of BestBefore Recipe Project
                        <ul>
                            <li>Succeeded, I really enjoyed doing something not necessarily simpler, but different.
                            </li>
                        </ul>
                    </li>
                    <li className="hoverable">Make a smaller, self-contained project much more quickly
                        <ul>
                            <li>I felt much more comfortable with the speed that I was programming at, and I was much more able to focus on single aspects of the project given how small it was. 
                                Given the intent, I was also happier drawing lines avoiding adding too much to the initial scope rather than feeling like I was being unambitious.
                            </li>
                        </ul>
                    </li>
                    <li className="hoverable">Keep a continuous journal of what I was doing each day, both for myself and any future collaborators.
                        <ul>
                            <li>Succeeded for the most part, but obviously some days were better than others and had more content to discuss. 
                                I also found it really useful to add in a "Next Step" section for every day, where I was able to maintain continuity and planning between sessions. 
                            </li>
                        </ul>
                    </li>
                    <li className="hoverable">Write tests before implementing functions, components and contexts (Test Driven Development)
                        <ul>
                            <li>Failed. Definitely failed. I'd kept to this during the very initial stages of development, but struggled to make tests (beyond "has X text"), 
                                given that I was still hashing out what components and structure the application would have. I think this was an aspect of how little planning 
                                I did on the initial stages of this project, where I wasn't fully certain about how to structure the application - this was a learning project after all. 
                                Later on in development I was able to write more tests after building components, but as time went on I found myself accelerating on the coding and falling way behind on the testing.
                                <br/><br/>
                                Testing and planning are still clear weak points of mine and I need to further strategise on improving them.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>   
            <div>
                <ul>
                    <h4>What's next:</h4>
                    <li className="hoverable">Look into porting into React Native.
                    </li>
                    <li className="hoverable">Extend the possible octave set.
                    </li>
                </ul>
            </div>
        </div>
    )
}