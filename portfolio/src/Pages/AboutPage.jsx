

export default function AboutPage () {
    return (
        <div>
            <h2>About Me:</h2>
            <div>
                <h4>Name: James Alport</h4>
                <h4>Role: Full Stack Web Developer</h4>                
            </div>
            <div>
                <h4>Summary:</h4>
                <p>Hello, my name is James and I'm a software developer. I graduated University with degrees in Physics and Computer Science, then worked as a Software Developer at Theorem Solutions for 4 years, using C, C++, C#, .NET and Java 
                    before eventually leaving to give myself oppourtunities to grow as a person. Since then I've moved my skills towards Web Development with Javascript, React and nodejs.
                </p>
            </div>
            <div>
                <h3>Early History</h3>
                <p>I was born in Colchester, going to Primary School at Littlegarth Private School and the Dedham Primary School before moving to Philip Morant School for my secondary education.
                   <br/>
                   <br/>
                   The GCSEs I studied during this time were Science (double), Maths, Statistics, Geography, History, Religious Education (half), German, English Language and Literature (double), I.T. and Product Design
                   passing with the eventual grades A,A,A,A,A,A,A,B,B,B,C,C,C respectively.
                   <br/>
                   <br/>
                   After my GCSEs I moved to the Colchester Royal Grammar School 6th form college and chose to study Maths, Physics, Chemistry and History, eventually getting B grades at A2 for all and a C for the mandatory General Studies A2.
                   <br/>
                   <br/>
                </p>
                <h3>University Education</h3>
                <p>My A-Levels qualified me to attend my first choice of university, the University of Birmingham, to study Physics (BSc), a three year course. 
                    During this course I studied basic Programming in C++, Mathematics, Astrophysics, Quantum Physics, Medical Imaging and Nuclear Physics
                    as well as compulsory physics subjects like Laboratory Physics and General Physics. After 3 years I graduated from the course with honours and the grade 2:2.
                    <br/>
                    <br/>
                    After my graduation I found myself struggling to decide where to target for employment - physics is an excellent qualification for many jobs but lacking specialisation none of them seemed feasible.
                    At first I considered becoming a teacher, even going so far as to shadow the physics teaching staff at my old secondary school for a week,
                    but while I learned more about the lesson-to-lesson details of what teaching entailed, I found myself only confronting the reality of what teaching entailed when I attended an interview for the course.
                    Put simply, the role required an enormous amount of energy and patience that I wasn't confident that I would be able to maintain through a career, so I chose to look in a different direction.
                    <br/>
                    <br/>
                    I'd cherished a love of computers and gaming throughout my childhood, but my time studying IT at GCSE (in that era it was more akin to a GCSE in MS Office) had put me off pursuing the subject any further.
                    My excitment to learn programming as a part of my Physics course was tempered by its eventual results: I attempted a project beyond my ability to produce, didn't finish a working program
                    and only managed a passing grade due to my writeup of my decisions and analysis of what went wrong:
                    <br/>
                    <br/>
                    "It's clear that every time you made a decision it had the worst possible outcome. That said, you've learned your lessons from them, so I'll give you the minimum passing grade. 40%"
                    <br/>
                    <br/>
                    That I can remember the gist of the comment so many years later is probably an indication of how much this near-failure meant to me at the time, so I chose to take what I saw as a weakness and turn it into a strength, 
                    moving to the other side of the University of Birmingham campus to study a year-and-a-half Masters in Computer Science.
                    This course, despite its title, could be considered more as a specialisation of my original degree rather than a seperate qualification. The primary compulsory course was basic programming, 
                    this time with Java, which I learned a lot more easily than C++. The capstone project for this course was a group project with randomly assigned fellow students. We chose to make a hypothetical hotel booking system, 
                    which involved UI design and database interactions. While this group project didn't go perfectly, looking back on it there were factors beyond our control that led to our imperfect output. 
                    Other compulsory courses centered around basic computer science concepts, data stuctures, databases and programming management workflows. The optional courses that I studied were Computer Imaging, 
                    Natural Language Processing and Commercial Programming (Which consisted of a guest speaker each week, each gave us a project we could choose as the module's final coursework. I chose a project provided by the speaker 
                    working for the Met Office weather forecasting).
                    <br/>
                    <br/>
                    The final portion of the MSc consisted of a large programming project based around a Computer Science subject that we would give a full dissertation on and then demonstrate and defend to a member of the teaching staff.
                    My choice for this project combined Physics (esp Astrophysics) with Computer Science: Calcuation of Galaxy Age based on the Deconvolution of Galactic Spectra. Galaxies produce different spectra as they age, and with 2 spectra of
                    galaxies with known age we can use a process called "Deconvolution" to deduce how old they are.  Convolution is a method of multiplying matrices together to form a product. <strong>DE-</strong>convolution is the process of 
                    finding the source factors behind a given matrix. In basic mathematics there are an infinite number of ways to make another number - 3 can be a product of 3 and 1, but it could also be a product of 3000000000 * 0.00000001. 
                    The same is true of matrices, which means that we need certain assumptions to narrow it down.  By using the two known galactic spectra provided, as well as the obvious caveat that any components would be positive only (negative light
                    not existing on intergalactic scales), we can find how much of each of the provided spectra has contributed to the whole, thus allowing us to derive the age.  While the source mathematics was beyond the scope of either of my degrees,
                    I was able to port the calculations into a Java UI application that would accept any input spectra and give their rough age.
                    <br/>
                    <br/>
                    This project, along with my exams and coursework, was sufficient for me to graduate with merit in December that year.
                    I chose not to attend this graduation as it clashed with an (unsuccessful) interview for a role as a Junior Software Developer.
                    <br/>
                    <br/>
                </p>
                <h3>Work History</h3>
                <p>
                    Job Hunting is always difficult, but I was able to find a role within 6 months of starting. In March 2012 I joined Theorem Solutions as a Junior Software Developer.
                    Theorem is a company that provides a service to migrate Computer Aided Design (CAD) files between different formats, with clients ranging from CAD supplies like Siemens Digital Industries Software and Dassault Systemes
                    to CAD users like AirBus or NASA.
                    <br/>
                    <br/>
                    Whist working at Theorem I had responsibility for developing the CADViewer visualisation software, which required me to process the geometric data for the various CAD parts being viewed into a format that the viewer library
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
                <h3>Voluntary Unemployment</h3>
                <p>
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
                <h3>Re-skilling and Re-learning</h3>
                <p>
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
            <div>
                <h4>Hobbies and Interests</h4>
                <ul>
                    <li>Reading: I've enjoyed reading for as long as I can remember, and it's fair to say that it's the most prevalent influence in my life. My primary preference is the Fantasy genre, as I enjoy seeing characters
                        being placed under stresses and pressures that we wouldn't see in reality, but thinking upon those reactions and what's believeable and what isn't illuminates human nature from a different angle that I find fascinating.
                        I'm not sure a fantasy lover can avoid Brandon Sanderson's works these days, but other works I've enjoyed include (in no particular order): Wheel of Time, Riftwar, Realm of the Elderlings, Cradle, Foundation, Dune, 
                        Dresden Files, 2/3 of Kingkiller, Suneater, Lord of the Rings (of course), Discworld (of course of course), Earthsea, Hitchhiker's Guide to the Galaxy.
                    </li>
                    <li>Computer Games: Another very early influence - I remember watching my brother and father playing games like the original Dune 2 and Discworld back when I was too small to reach a keyboard. To this day I've maintained my 
                        love of strategy games, following down their branching paths to 4X games like Civilization and Stellaris, MOBAs like Dota 2, city builders and simulation games like Against the Storm and Banished and automation games like Factorio, 
                        Dyson Sphere Program and Satisfactory. Unsurprisingly enough, given my love of reading, I also love the more story-heavy RPG series like Final Fantasy, Tales, Persona as well as western titles like Mass Effect, 
                        Elder Scrolls and Baldur's Gate.
                    </li>
                    <li>Circus Society: Shortly after enrolling into the University of Birmingham I joined the Circus Society at the behest of my friends. The primary focus of this society was in teaching street performance techniques revolving around
                        object manipulation, including activities like juggling (with balls, clubs and silks...as well as most other things that can fit in a hand), cigar boxes, contact juggling, plate spinning and similar techniques.
                        I also learned showier skills centered around fire spinning performances, involving poi, whip, club juggling (again) and most importantly for me, staff. Staff spinning quickly became my primary specialty in the 
                        society, and after a couple of years I ended up as the primary instructor and most skilled performer. I found myself initially uncomfortable with performing, as my natural shyness came to the fore, and for my initial 
                        few gigs I had to be gently peer-pressured into performing. Eventually, as my confidence in my own skills grew, I was able to overcome my performance nerves and ended up spinning flawlessly in front of hundreds of people
                        at a University American Football game.
                    </li>
                    <li>Tai-chi: During my second year in Birmingham, I began attending a Tai-chi class run by the Grandmaster-elect of the Northern Wu style. Learning traditional Tai-chi not only improved my fitness and flexibility, it also
                        increased my knowledge of biomechanics, my mental discipline and my confidence. I eventually reached a point where I was able to scare off an attempted mugger by simply refusing to be intimidated. As I grew in skill, I 
                        began taking on more teaching responsibilities within the class, even while learning techniques and forms from similar martial arts like Baguazhang, Xingyiquan and Bajiquan. 
                        
                        I eventually reached the point where I was asked to take charge of the class when my teacher moved to London, although at that point membership had begun to reduce enough that it was uneconomic to continue the class further
                        and after much discussion and sadness I made the decision to close the class down.
                    </li>
                </ul>
            </div>
        </div>
    )
}