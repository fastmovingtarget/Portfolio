export default function MisacProjectSummary () {
    return (
        <div>
            <h3>Music Project: "Misac" Summary</h3>

            <h4>The final product:</h4>
            <li className="hoverable"><a className="hyperlink" href="https://github.com/fastmovingtarget/Misac">Github Repository</a></li>
            <li className="hoverable"><a className="hyperlink" href="https://fastmovingtarget.github.io/misac/">Implemented web page</a></li>
            
            <div className="hoverable">
                <ul>
                    <h4>The Problem:</h4>
                    <li>During my brief forays into learning keyboard/piano during Covid-19 pandemic the main problem I encountered was that I couldn't quickly read sheet music.</li>
                    <li>There are 3 items to link up in this problem:
                        <ul>
                            <li>The note required on the stave</li>
                            <li>The corresponding piano key</li>
                            <li>The audible note that the piano key press produces</li>
                        </ul>
                    </li>
                    <li>There would also need to be a form of decaying score so that there's an incentive to improve the speed at which the notes are played</li>
                </ul>
            </div>
            <div className="hoverable">
                <ul>
                    <h4>Initial Design:</h4>
                    <li>First comes the piano keyboard. The visuals could be built using simple CSS and HTML, and key press events could be handled using JavaScript. 
                        I'd implement only a single octave initially, which could be increased once Options were implemented. This extensibility would be made easier by using the React library.
                        As a crucial part of the application, sound would be integrated with the keyboard during the initial development</li>
                    <li>Second comes the stave. Once again, the 5 bars and ledger lines would be created using CSS and HTML, but the clef and notes would be sourced from free image files, then adjusted positionally with CSS.
                        The notes would be generated randomly for a set amount, and would only generate for the selected octaves (initially hardcoded as octave 4).
                    </li>
                    <li>Third comes the options. These were planned to allow the user to set the volume and the number of notes. Options data was initially designed to be stored in a simple state at the top level.
                    </li>
                    <li>Fourth comes scoring. This should be located in the top corner in the manner of many old-fashioned games and high scores would be stored using a localStorage cache on each individual platform.
                        The score would decay based on a percentage of its total, and the decay rate would have to be fine-tuned based on how it feels</li>
                    <li>Fifth comes upscaling - being able to increase the number of octaves available to the player/learner. This would be changeable in the options menu and would re-randomise the notes based on the new octave set.
                    </li>
                    <li>Last comes deployment. As a purely static web application this can be hosted for free using GitHub pages.</li>
                    <h4>Subsequent Design:</h4>
                    <li>During development of the stave it was obvious that I wasn't really leveraging the usage of the "black" keys (sharp/flat) on the keyboard, so I chose to implement a selectable key signature in the options. 
                        After doing research and consideration I concluded that this would only reach 5 sharp/flat because any further would confuse the way I'd implemented the note detection (for instance at 6 sharp, there are both F and Fsharp in the potential note pool).
                    </li>
                    <li>I found it quite annoying to be constantly changing the options set every time I re-initialised or refreshed the page, so I ended up moving the options into the same cache as the High Score.</li>
                    <li>When upscaling the number of keyboard octaves it became obvious that there was a lot of data that needed accessing at the various levels of the application. 
                        For this reason I decided to migrate the Options, High Score, Note Set and audio play functions into a unified context that would be initialised on startup and accessible at every level of the application</li>
                    <li>It became obvious that clicking on they key would limit the player's score to their speed on the mouse rather than their speed at note reading, so I decided that it would be necessary to implement keyboard key binding to allow greater skill expression.
                        These would be a selectable option in the options menu.
                    </li>
                </ul>
            </div>
        </div>
    )
}
