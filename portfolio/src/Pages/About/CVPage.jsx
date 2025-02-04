import { useState } from "react";
import "./CVPage.css"

function CVComponent() {

    const [educationMore, setEducationMore] = useState(false);
    const [interestDetails, setInterestDetails] = useState(false);

    const data = {
        "Contact Information":{
            "E-mail":"jrmalport@gmail.com",
            "Mobile":"07840795751",
            "Location":"Horsham, West Sussex",
            "Portfolio":"https://fastmovingtarget.github.io/Portfolio/"
        },
        "Work Experience":[{
                "Employer":"Seedhack",
                "Location":"Remote",
                "Title":"Co-Founder, Web App Developer",
                "Timespan":"January 2016 - August 2016",
                "Responsibilities":[
                    "Development of a web and mobile application based on information supplied by Co-Founders using Meteor.js, MongoDB and Apache Cordova",
                    "Close collaboration with development colleagues to create and build a functioning prototype application in order to secure funding"
                ]
            }, {
                "Employer":"Theorem Solutions Inc",
                "Location":"Tamworth",
                "Title": "Software Developer",
                "Timespan":"March 2012 - November 2015",
                "Responsibilities":[
                    "Modification of existing code to store and retrieve data using MySQL databases.",
                    "Conversion of obsolete legacy C code into updated C++ using external API.",
                    "Research into potentially useful software and libraries, performance testing and prototype development.",
                    "Creation of graphics viewer using VSG OpenInventor API and conversion of data from CAD structures into scene graphs.",
                    "Integration of viewer software into collaboratively created user interface via .NET's Managed Extensibility Framework, and modification of UI in WPF and C#.",
                    "Development of a node.js web server on AWS cloud server to allow remote rendering of VSG OpenInventor data types, and adaptation to interact with Microsoft Sharepoint."
                ]
            }
        ],
        "Education":[
            {
                "Timespan":"2010-2011",
                "Instutution":"University of Birmingham",
                "Title":"Computer Science, MSc",
                "Grade":"Pass with Merit"
            },{
                "Timespan":"2007-2010",
                "Instutution":"University of Birmingham",
                "Title":"Physics, BSc",
                "Grade":"2:2 with Honours"
            },{
                "Timespan":"2005-2007",
                "Instutution":"Colchester Royal Grammar School",
                "Title":"Physics, Maths, Chemistry, History and General Studies",
                "Grade":"B, B, B, B, C"
            },{
                "Timespan":"2000-2005",
                "Instutution":"Philip Morant School",
                "Title":"Maths, Statistics, Science (double), Geography, History, Religious Education, English Language, English Literature, German, Product Design (double), IT",
                "Grade":"A, A, A, A, A, A, A, B, B, B, C, C, C"
            }
        ],
        "Technical Skills":[
                "React, HTML and CSS used in designing both web sites and web applications",
                "Node.js used in building RESTful API and communicating with MySQL",
                "Jest and Vitest unit testing for React and nodejs applications",
                "Microsoft Azure ",
                "Java, with use of Java Swing graphics library and JDBC database access library",
                "C and C++ used in legacy code and geometric modelling libraries",
                "User Interface design using HTML/CSS/React, Java Swing, Windows Presentation Foundation",
                "Graphical and Physics modelling using OpenGL and Unity",
                "SQL Database design and usage with MySQL and PostgreSQL management systems using from Nodejs, Java and C/C++",
                "Non-relational database design and usage with MongoDB",
                "Programmatic Image Detecting using computational vision modelling"
        ],
        "Other Skills":[
            "Object Orientated Programming with Java, C# and C++",
            "Agile software development - based primarily on SCRUM development framework",
            "Driving - full UK license and car ownership",
            "Graphical image manipulation using open-source software",
            "Basic video editing"
        ],
        "Hobbies and Interests":{
            "Tai-Chi":[
                "Member of the Inner School of the Northern Wu style.",
                "Secretary and Treasurer of University of Birmingham Tai-Chi society.",
                "Class instructor and administrator"
            ],
            "Circus Skills":[
                "Teaching a variety of skills including staff-spinning, juggling, poi and diabolo",
                "Performances and workshops within my specialities both for charity and for pay."
            ],
            "Bouldering":[
                "Use of problem solving skills and technical improvement up to v4 level"
            ],
            "Running":[
                "Royal Parks Half Marathon 2018 and Birmingham Half Marathon 2019"
            ],
            "Reading":[
                "Fiction, mainly within the Fantasy and Science-Fiction genres"
            ],
            "Gaming":[
                "Real-Time Strategy, Automation, Western and Eastern Role-Playing Games are my primary genres, although I enjoy a wide variety of games."
            ],
            "Board Gaming and Table Top RPGs":[
                "Multiplayer deckbuilders, strategy games.",
                "Ran and Dungeons and Dragons 5E campaign as Game Master for 8 months."
            ]
        }
    }

    return (
        <div className="cv-container column ">
            <div className="contact-details-container column hoverable">
                <h3>Contact Information:</h3>
                <div className="contact-details-information-container bisected-list">
                    {
                        Object.keys(data["Contact Information"]).map(key => {
                                if(key === "Portfolio")
                                    return <p>Portfolio: <a href={data["Contact Information"]["Portfolio"]}>{data["Contact Information"]["Portfolio"]}</a></p>
                                return <p>{key}: {data["Contact Information"][key]}</p>
                            }
                        )
                    }
                </div>
            </div>
            <div className="work-experience-container column hoverable">
                <h3>Employment History:</h3>
                {
                    data["Work Experience"].map(job => 
                        <div className="job-experience-container">
                            <h4>Employer: {job.Employer}, {job.Location}</h4>
                            <p>{job.Title}, {job.Timespan}</p>
                            <h4>Responsibilities: </h4>                        
                            <ul className= "bisected-list">
                                {
                                    job.Responsibilities.map(resp => 
                                        <li>
                                            {resp}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
            <div className="education-container column hoverable">
                <h3>Education:</h3>
                <ul className= "bisected-list">
                    {
                        data["Education"].map((education, index) => {
                            if(index <= 1 || educationMore){
                                return (
                                    <li>
                                        <h4>{education.Instutution}, {education.Timespan}: {education.Title}</h4>
                                        <p>Grade: {education.Grade}</p>
                                    </li>
                                )
                            }
                            else return null;
                        })                    
                    }
                </ul>
                <span onClick={() => setEducationMore(!educationMore)}>{!educationMore ? "See More..." : "See Less..."}</span>
            </div>
            <div className="tech-skills-container column hoverable">
                <h3>Technical Skills</h3>
                <ul className= "bisected-list">
                    {
                        data["Technical Skills"].map((skill, index) => 
                            <li>{skill}</li>
                        )
                    }
                </ul>
            </div>
            <div className="other-skills-container column hoverable">
                <h3>Other Skills:</h3>
                <ul className= "bisected-list">
                    {
                        data["Other Skills"].map((skill, index) => 
                            <li>{skill}</li>
                        )
                    }
                </ul>
            </div>
            <div className="interests-container column hoverable">
                <h3>Interests:</h3>
                <ul>
                    {
                        Object.keys(data["Hobbies and Interests"]).map((interest, index) => 
                            <li>{interest} 
                                { interestDetails ? 
                                    <ul>
                                        {data["Hobbies and Interests"][interest].map(interestItem => 
                                            <li>{interestItem}</li>
                                        )}
                                    </ul> : 
                                    null
                                }
                            </li>
                        )
                    }
                    <span onClick={() => setInterestDetails(!interestDetails)}>{!interestDetails ? "See Details" : "Hide Details"}</span>
                </ul>
            </div>

        </div>
    )
}

export default CVComponent;