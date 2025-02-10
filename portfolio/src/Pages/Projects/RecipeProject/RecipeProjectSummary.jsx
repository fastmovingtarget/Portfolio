export default function RecipeProjectSummary () {
    return (
        <div>
            <h3>Recipe Project: "BestBeforeStart" Summary</h3>

            <h4>The final product:</h4>
            <li className="hoverable"><a className="hyperlink" href="https://github.com/fastmovingtarget/BestBeforeAzure">Github Repository</a></li>
            <li className="hoverable"><a className="hyperlink" href="https://bestbeforerecipes.fastmovingtarget.co.uk/">Implemented web page</a></li>
            
            <div className="hoverable">
                <ul>
                    <h4>The Problem:</h4>
                    <li>During 2023 and 2024 I'd found myself in charge of cooking and shopping in my household, having no real expertise in doing either for multiple people. 
                        The biggest issue I had was keeping track of what was available to cook with and what needed to be bought, and what was no longer edible.</li>
                    <li>Related to this, I also wanted a way to store the few recipes I knew or had learned in a way that I could improve upon and potentially share.</li>
                    <li>Unifying these two, I wanted to be able to take ingredients that were near their use-by date and plan what recipes I would use to prevent them going past it.</li>
                    <li>I'd been out of full-time software development for around 8 years and was looking to re-skill into more current technologies.</li>
                    <li>To this end I wanted to build an application that would maximise what I would learn in terms of technologies used.</li>
                    <li>I also wanted to improve my understanding of my own weaknesses in software development, which had caused me to move away from my career in the first place.</li>
                </ul>
            </div>
            <div className="hoverable">
                <ul>
                    <h4>Identifying Tools</h4>
                    <li>I'd intended the base front-facing language to be React from the start. 
                        I'd learned it around 2020 and while I had trouble initially getting my head around its specific capabilities I found it easier to use than I had ASP.NET. 
                        The potential to port it into React Native was also a factor in my decision.</li>
                    <li>For the backend data handler I initially chose to use basic Node.js. 
                        It made sense to me to keep the frontend and backend using the same language, and Node.js was able to easily receive fetch requests from the frontend and make requests from MySQL.</li>
                    <li>For the database management system the first choice should always be between Relational and Non-relational. The obvious use-case of searching Recipes via the ingredients used gave me a clear reason to use a relational database.
                        Within that criteria I also wanted a management system that had a free local developer server, an easy-to-use client and most importantly the ability to use it with Node.js. 
                        I knew from previous experience that MySQL matched the first two, and a quick search and test showed that it matched the third as well. So MySQL would be my database server. 
                    </li>
                    <li>While I'd identfied all of the other technologies early on in developlent, selecting my deployment tool was one of the last things I did before deploying. 
                        Based on the skills most sought after in the job market I'd narrowed the choices down to Microsoft Azure and Amazon Web Services (AWS).
                        In the end there wasn't much to choose between the two, but I ended up going for Microsoft Azure simply because it seemed to have the better offer monetarily.
                    </li>
                </ul>
            </div>
            <div className="hoverable">
                <ul>
                <h4>The Solution</h4>
                    <li>Step 1: Build an application that would post and get information on my ingredients and recipes.</li>
                    <li>Step 2: Implement user differentiation via secure user authentication.</li>
                    <li>Step 3: Add the ability to plan which recipes to use on what dates, and to detect whether an ingredient is available in the user's inventory.
                        <ul>
                            <li>Step 3.5: Implement a shopping list so that required items can easily be bought.</li>
                        </ul>
                    </li>
                    <li>Step 4: Optimise and refactor based on RESTful API prinicples</li>
                    <li>Step 5: Deploy</li>
                </ul>
            </div>
        </div>
    )
}
