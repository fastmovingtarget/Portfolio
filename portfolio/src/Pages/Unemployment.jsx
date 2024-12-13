import {useState} from 'react';

function Unemployment() {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <h3 onClick={() => setVisible(!visible)} name="unemployment">Voluntary Unemployment</h3>
            <p id="unemployment" style={{display:visible ? "block" : "none"}}>
                Shortly after leaving Theorem I was contacted by a friend who wanted to work with me on a part-time basis to develop a web and mobile application based on his experience in recovering from surgery. The idea was that by providing a 
                timeline for recovery, providing physiotherapy exercises and allowing people to discuss their own recovery journeys with others, it would improve the patient's recovery experience. Programming the application would be done in
                collusion with the expertise an NHS consultant surgeon that my friend had met on his PhD course. 
                <br/>
                <br/>
                The application was built for Web using Meteor.js, with a MongoDB backend, then migrated to mobile using Cordova.
                <br/>
                <br/>
                We were able to make an application for submission within about 6 months of starting it (although 80% of that time was spent waiting for input from our surgeon colleague), and while it was awarded a minor commission from the NHS
                it didn't justify the amount of time we had spent on it. We made the decision to cut our losses and cease development on it before it incurred more losses.
                <br/>
                <br/>
                Following this project, I chose to focus on my personal improvement and mental and physical health. Working full time with a 2h commute had taken a substantial toll upon my health, and my first priority was to improve my fitness and 
                physical wellbeing. During this time I was able to train for the Royal Parks Half Marathon 2018 in London, and then the Birmingham Half Marathon in 2019. I also took up bouldering as a more social activity and continued to practice 
                and teach tai-chi until eventually closing the class in 2017.
                <br/>
                <br/>
            </p>
        </div>
    )
}

export default Unemployment;