import {useState} from 'react';

function Retraining() {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <h3 onClick={() => setVisible(!visible)} name="retraining">Re-skilling and Re-learning</h3>
            <p id="retraining" style={{display:visible ? "block" : "none"}}>
                By the time that 2019 arrived, I was feeling that I'd been out of work far too long already and began re-learning Meteor.js, which is when I first began hearing about React as a programming language. I spent much of the year working on
                projects that caught my interest, but stalling out the moment that my motivation wavered, before eventually giving up during the difficult times in 2020. Spending the initial Covid wave living by myself and with little social or professional
                contact took its toll on my mental and physical state, although I continued to make personal development progress in other areas.
                <br/>
                <br/>
                Moving into 2021 I'd been able to stabilise myself and move into more reasonable living patterns, but spent much of the year re-establishing my social stamina and personal fitness, although not without some setbacks.
                <br/>
                <br/>
                In 2022 I began studying Frontend Web Development via CodeCademy, as well as other shorter modules like Computer Security and ASP.NET web development. I also began a long distance relationship with my partner, who I 
                would eventually move in with in 2023. Unfortunately shortly after this my partner developed Bilateral Cubital Tunnel Syndrome(CTS), which left her unable to use her arms without pain, causing sleepless nights and eventually Acute Fatigue.
                Fortunately my lack of employment meant that I was able to care for her, but it did cause me to once again cease my studies and put my eventual job search on hiatus once again.
                <br/>
                <br/>
                Thankfully in early 2024 my partner was able to undergo major elbow surgery to rectify her CTS and after she had recovered sufficiently to function for herself I was able to once again re-start my development journey.
                This time, instead of studying I chose to learn by doing: creating my own React web application: See Recipe App for more details.
                <br/>
                <br/>
                After spending 6 months developing the application I finally finished it sufficiently to expose it to public view via Microsoft Azure, allowing me to work on other smaller projects before I go back to polish and 
                improve it further.
            </p>
        </div>
    )
}

export default Retraining;