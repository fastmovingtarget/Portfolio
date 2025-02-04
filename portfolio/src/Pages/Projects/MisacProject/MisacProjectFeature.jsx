import {useRef} from "react"

/*Component containing information on the Misac Project
Input Properties:
feature: {
    title:string,
    video:imported mp4 video,
    description:string
}
index:int, used to generate key,
isVisible: boolean, dictates whether the component is visible
*/

function MisacProjectFeature ({feature, index, isVisible}) {
    const vidRef = useRef(null)

    return (
        <div key={feature.title + index}
            className={"row feature-container hoverable " + (isVisible ? "visible" : "hidden")} 
            style={{height:isVisible ? (300/*Video*/ + 20/*video margin*/) + "px" : "0px"}} 
            onMouseOver={() => vidRef.current.play()} onMouseOut={() => vidRef.current.pause()}
        >
            <video ref={vidRef} className="" src={feature.video} alt="placeholder"  muted loop height="300px"/>
            <div className="column">
                <p className="justify-left title">{feature.title}</p>
                <p className="justify-left text">{feature.description}</p>
            </div>
        </div>
    )
}

export default MisacProjectFeature