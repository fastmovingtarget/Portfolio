import {useRef} from "react"

function MisacProjectFeature ({feature, index, isVisible}) {
    const vidRef = useRef(null)

return (
    <div 
        key={feature.name + index}
        className={"row feature-container hoverable " + (isVisible ? "visible" : "hidden")} 
        style={{height:isVisible ? (300/*Video*/ + 20/*video margin*/) + "px" : "0px"}} 
        onMouseOver={() => vidRef.current.play()} onMouseOut={() => vidRef.current.pause()}
        >
        <video ref={vidRef}className="" src={feature.video} alt="placeholder"  muted loop height="300px"/>
        <div className="column">
            <p className="justify-left title">{feature.name}</p>
            <p className="justify-left text">{feature.text}</p>
        </div>
    </div>
)}

export default MisacProjectFeature