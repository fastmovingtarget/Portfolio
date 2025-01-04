import {useState} from 'react';

function Employment() {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <h3 onClick={() => setVisible(!visible)} name="employment">Employment History</h3>
            <p id="employment" style={{display:visible ? "block" : "none"}}>
                Job Hunting is always difficult, but I was able to find a role within 6 months of starting. In March 2012 I joined Theorem Solutions as a Junior Software Developer.
                Theorem is a company that provides a service to migrate Computer Aided Design (CAD) files between different formats, with clients ranging from CAD supplies like Siemens Digital Industries Software and Dassault Systemes
                to CAD users like AirBus or NASA.
                <br/>
                <br/>
                Whist working at Theorem I had responsibility for developing the CADViewer visualisation software, which required me to process the geometric data for the various CAD parts being viewed into a format that the OpenInventor viewer library 
                could read, and then eventually adding the viewer into an integrated process management program. 
                <br/>
                <br/>
                This responsibility required me to work with functions and libraries in C, many of which were almost as old as I was (and apparently written before "string" had a standardised meaning). The process management software was written
                in C#, so integrating my CADViewer required me to learn how to use C# as well as C and C++ (as well as debugging legacy software that was written in Java).
                <br/>
                <br/>
                Towards the end of my time at Theorem my responsibility for the viewer software grew to encompass a web tool to view CAD parts on a live-streamed website. This tool was the first time that I worked with JavaScript, HTML and nodejs.
                <br/>
                <br/>
                During all this time, I'd found myself growing restless in my role for a number of reasons and in the spring of 2015 I began seeking new employment, but was unable to find anything that I felt would be a positive change.
                <br/>
                <br/>
                Eventually I chose to hand in my notice and my employment at Theorem ended in November 2015, without any new work to go into.
                <br/>
                <br/>
            </p>
        </div>
    )
}

export default Employment;