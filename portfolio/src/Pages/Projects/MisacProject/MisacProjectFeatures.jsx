import {useState} from "react"
import MisacProjectFeature from "./MisacProjectFeature"
import MisacPlay from "../../../Videos/tinytest.mp4"//"../../../Videos/MisacPlay.mp4"
import MisacVolumeNumNotes from "../../../Videos/tinytest.mp4"//"../../../Videos/MisacVolumeNumNotes.mp4"
import MisacKeySignature from "../../../Videos/tinytest.mp4"//"../../../Videos/MisacKeySignature.mp4"
import MisacChangeOctave from "../../../Videos/tinytest.mp4"//"../../../Videos/MisacChangeOctave.mp4"
import MisacVolumeKeyBindings from "../../../Videos/tinytest.mp4"//"../../../Videos/MisacVolumeKeyBindings.mp4"

export default function MisacProjectFeatures () {

    const features = {
        "Playing the game":[{
            title:"Gameplay",
            video:MisacPlay,
            description:"This is a simple demonstration of the basic \"gameplay\" using a mouse to select the piano keyboard keys to play." + 
            " The score increases by 1000 for every correct note played, but decreases over time to ensure a player will improve in speed as well as accuracy." + 
            " Reaching the end of the current note set will regenerate it according to the number of notes set in the options."            
        }],
        Options:[{
            title:"Volume and Number of Notes",
            video:MisacVolumeNumNotes,
            description:"The volume can be decreased with a simple slider. The number of notes is a number input field that is currently hard-capped at 12."+
            " Each time this is changed, the note set is re-generated at random, but the notes stay the same when volume is changed (because it should has no effect on them)."     
        },{
            title:"Key Signature",
            video:MisacKeySignature,
            description:"The key signature can be selected between \u266d\u266d\u266d\u266d\u266d and \u266f\u266f\u266f\u266f\u266f, with each selection changing the keys highlighted on the piano, and the key signature notation on the stave." + 
            "This doesn't affect the generated note set, but it does change the keys required to play them correctly."
        },{
            title:"Changing Octave",
            video:MisacChangeOctave,
            description:"The user has the option to change which octaves the keyboard and note set is generated in." + 
            " This is currently constrained to octaves 4 and 5, because others would involve rendering a different clef and stave. This is an option for expansion later in the development cycle."
        },{
            title:"Changing Keyboard Bindings",
            video:MisacVolumeKeyBindings,
            description:"Keybinds can be added on non-touchscreen platforms when focussed will listen for any key presses and map that key to the corresponding note. " + 
            "Using in-browser hotkeys (e.g. tab, backspace) will override the browser behaviour, but ONLY when those keys have been mapped. " + 
            "Before this video I also increased the size of the options menu in order to allow the keybinds to be read more easily by the user, which is why it looks different to the other videos. This will be the size of the options menu going forward."  
        }]
    }
    const [featureVisible, setFeatureVisible] = useState({
        usage:false,
        score:false,
        options:false
    })

    return (
        <div className="feature-breakdown-container">
            {
                Object.keys(features).map((featureName) => {
                    return (
                        <div className={featureName + "-features-container column"}>
                            <div className="hoverable clickable row" onClick={() => {
                                setFeatureVisible({
                                    ...featureVisible, 
                                    [featureName]:!featureVisible[featureName]
                                })}}>
                                <div className={"collapse-arrow " + (featureVisible[featureName] ? "uncollapsed" : "collapsed")}><h4>{"\u25b6 "}</h4></div><h4>{featureName}</h4>
                            </div>
                            <div>
                                {features[featureName].map((feature, index) => (
                                    <MisacProjectFeature feature={feature} index={index} isVisible={featureVisible[featureName]} key={"ingredient"+index}/>
                                ))}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}