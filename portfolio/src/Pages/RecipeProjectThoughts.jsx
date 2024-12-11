

export default function RecipeProjectThoughts () {
    return (
        <div>
            <h2>Reflections on how the Recipe Project has gone so far:</h2>
            <div>
                <h4>Initial Goals:</h4>
                <ul>
                    <li>Learn and sharpen my use of React in an actual development setting.</li>
                    <li>Create and use an API server to store data</li>
                    <li>Access and store API data using MySQL</li>
                    <li>Write and run unit tests for the application</li>
                    <li>Deploy web app to the internet on a cloud server</li>
                </ul>
                <h4>Weaknesses that I realised during development that I had to work on:</h4>
                <ul>
                    <li>Poor understanding of how information is moved between client and server, and security protocols around it</li>
                    <li>No real understanding of login/user access security and best practices</li>
                    <li>Mediocre knowledge of UI design and css</li>
                </ul>
            </div>
            <div>
                <h4>Development Timeline:</h4>
                <ul>
                    <li>My initial idea for the application was relatively simple - I wanted something to help me keep track of what items were in the fridge, and suggest recipes based on when those items would expire.
                        This is where the "Best Before" title comes from. This would allow me to tick the basic boxes of my initial goals without pushing too far time-wise.</li>
                    <li>The first step was to build the initial Ingredients data form and create a nodejs server to submit it to, which provided my first hurdle. Passing data between client and server was more complex
                        than a simple "fetch" function call due to the Cross-origin Resource Sharing (CORS) security protocol. One of the more nebulous things that I'd wanted to work on was developing with security in 
                        mind from the outset, so instead of just copying some code and hoping it would work, I spent a lot of time looking through the CORS documentation and stepping through the server responses 
                        to find out exactly how it was working and looking at what I could do to maintain the Principle of Least Privilege - giving access only to the Recipe App client and only to certain requests.
                    </li>
                    <li>After solving my initial problems with server interaction I was able to create and use a MySQL server to store and read the Ingredient data. I'd had a fair amount of experience using MySQL, 
                        so the actual database design and querying wasn't particularly troublesome, the only issue was getting used to using the MySQL nodejs library to perform those queries. Once Ingredients were
                        able to be accessed, I was able to work on the Recipes page, which was a lot more complex. It was obvious very quickly that I would have to split the ingredients a recipe uses into a different
                        table, which would allow me to search for recipes in the Ingredients tab. The recipe instructions at this point were simple text, but I'd begun to think about how I could break them up into something
                        better formattable.
                    </li>
                    <li>After completing my initial recipe tab and functionality, I submitted it to my in-house QA and was given my first input from an outside perspective. There were a lot of bugs discovered, especially
                        in the html validation and some of those bugs instead of attempting to fix them directly I ended up changing or improving the functionality to circumvent them. 
                        
                        This is about the point in time where I started considering increasing the functionality to include the Planner and the Shopping list. I was also considering making it a pseudo-social-media application
                        and looking at making attempts to monetize it.
                    </li>
                    <li>The first priority after fixing (or at least planning my fixes for) the bugs was to implement separated user data. Account setup and login information was something that I had considered in general but not
                        how to make it work in React. The implementation I used was derived from a tutorial online, making use of an Authorisation Provider context to store the user ID, local device storage to store a token and
                        storing hashed passwords alongside unique user email in the MySQL database. 
                    </li>
                    <li>Once I finished implementing user login credentials I was able to move back to something that I had been wanting to re-implement for a while: Recipe Instructions. I decided that instead of having a single monolithic
                        instruction text, I'd prefer to have multiple broken-down instructions. This would allow room for me to set up timers for each itemised part, and to let the user store concurrent instructions in a way that made
                        sense to me (it might not make sense to anyone else, though).

                        I ended up implementing instructions via a new MySQL table, storing each instruction individually and linking them with before/after/during identifiers and then integrating them into a JavaScript object once they were
                        extracted from the server.

                        With this method of instruction storage I was able to implement a prototype form/visualisation for the Recipes page, but while it worked...mostly, I wasn't able to wrestle css into submission and it looked very awkward for
                        a while.
                    </li>
                    <li>Having tired of trying to make the Recipe Instruction tab display in the exact way I wanted it to, I moved towards another area that I had been neglecting. Unit testing had long been a weakness of mine, 
                        and I'd briefly attempted it earlier on in the developer cycle before petering out. At the time I found it hard to justify making sure everything worked when I already knew that it did because I'd tested it by hand - 
                        completely missing the point of unit testing in the first place. 

                        Moving through my code and writing more effective unit tests did uncover some serious potential issues as well as helping me learn how to best use the react testing libraries and Jest. The major benefit, however
                        was that I improved the way I was thinking about my code and was able to take the lessons forward into my future development.

                        From that point onwards, instead of writing a feature and then coming back and writing unit tests for it, I commited to spending one day a week writing unit tests for the code I'd written that week. I feel that that worked
                        better and made unit testing more manageable, although in future applications now that I'm better equipped to write both tests and testable code I'm more inclined to use Test Driven Development, where I write the tests first
                        and then write code to match it.
                    </li>
                    <li>Following my testing spree, I went into development on the Recipe Planner. In terms of actual code, this became the most complex of the pages, but my personal feelings on it never reached the level of frustration that 
                        Recipe Instructions achieved. Initially my major challenge was in creating the calendar visual, which I did from scratch. It was almost refreshing to go into a component and have to create a more mathematical algorithm
                        rather than chiefly worrying about React's data flow properties (i.e. useState). I also chose at this point to look into taking a smaller sample of data (12 months of plans) with my API queries rather than grabbing 
                        the entire applicable dataset. Thinking about cacheing data in this way lead me to start thinking about making a substantial improvement in how I queried and stored data later on.

                        Having built the calendar, I started working on what an activated date component should do. The ability to add planned recipes to a date was obvious, but I wanted to find a way to interact with that plan so that the user 
                        would be able to plan how to use their inventory ingredients with the recipe ingredients, or add an ingredient to the (yet to be added) shopping list automatically.  Eventually I landed on adding an inventory ingredient list
                        component to the recipe ingredient planner and then split (if needed) the inventory ingredient into used and unused parts.
                    </li>
                    <li>The shopping list tab was relatively simple. In many ways I could copy the original ingredient page that I'd first made, but I chose to write the shopping list almost from scratch, making use of the extra tools and 
                        knowledge I'd gained over the time since. I then started to move some of the techniques I'd used back to the original Ingredients page.

                        The complexity of the Shopping List page was transferring items to it (from the Planner) and from it (to the Ingredients Page), but these were still relatively simple to implement.
                    </li>
                    <li>Having finally implemented what I would call the core structure of my front-end application, there was an issue that I'd encountered increasingly often: The Ingredients page was searching both Ingredients
                        and Recipes (for every Ingredient, no less) and the Planner page was searching Plans, Ingredients and Recipes. As well as this, each page was having to search all of these every time a change was made!

                        While I'd not strictly encountered any problems with this in the development environment, I wasn't comfortable with performing so many API and Database queries with the performance and security issues that presented.
                        During this time I'd begun to encounter discussion of Restful APIs, and while I'd come close to it by making what I considered sensible decisions, I'd not thought about data cacheing within the client. Given that the 
                        data I was using was text-only, there shouldn't be a significant memory usage from these assets (until and unless someone decides to test the limitations of my application).

                        Given these starting points, I moved towards the idea of using Context, a React library that enabled holding data in a high level wrapper accessible to any component inside it. This would allow me to cache the data 
                        whilst reducing the need to drill it down through the components from the top, stop me from having to call the api each time a page was loaded or reloaded and remove the need for me to search multiple datasets for each
                        page. An excellent solution, but not without the need to re-address much of my working code. 

                        The most notable challenge of this was finding ways to mimic the MySQL queries used in the API so that the cache would not need to be re-loaded each time a change was made. This left me with a lot of more complex 
                        algorithmic code to write, which I always enjoy.
                    </li>
                    <li>After finally implementing and testing the new Context solution, I was once again able to submit the application to testing and received a much more significant spreadsheet in response. Some key takeaways for me:
                        <ul>
                            <li>A lot of the errors that had been initially flagged and fixed had reoccurred. Looking back, I realised that my initial test drive had taken place after my initial fixes, and I didn't think to lock them into the unit tests.
                                From that point onwards, I made a point of adding unit tests for bug fixes (where possible) as I should have been doing all along.
                            </li>
                            <li>The code that I hadn't looked at recently or had become more complex was often the most buggy. Especially the login page(s) and the Recipe Planner were major culprits.
                            </li>
                            <li>HTML form and input validation are important for preventing insecure user input. They also need to match up to the limitations of the database, which apparently is so obivious I forgot it.
                            </li>
                            <li>CSS and front end formatting may be less interesting to me than backend and API design, but they are the first thing the user cares about and the most important thing to polish.
                            </li>
                        </ul>
                    </li>
                    <li>Once I made the bug fixes and the requested improvements, I was happy that my application was finally in a usable state. Not finished, but usable. From there I had to decide how to deploy the client, API and database server.
                        After doing some research I chose to use Microsoft Azure, as it would allow me to serve all three in an integrated way (and had a month long free trial, I'm not made of money).

                        My initial intent had been to just shove the application onto the internet in the same shape it took in my development environment, but after some consideration I chose to use an Azure Static Web App integrated with Azure 
                        Functions to implement the API. This would be more secure than hosting the API on a completly different server. While there was some integration for MySQL calls via Azure Functions bindings, the technology was still in the 
                        Preview phase, and the documentation and functionality simply wasn't sufficient to justify rewriting my code to integrate it.

                        The integration of my app into MS Azure took a few days and was relatively simple (once I'd ironed out the initial errors with how I was serving it), and the application is now up and usable, although I'd describe it  as 
                        still in a pre-release state.
                    </li>
                    <li>
                        Next Steps:
                        <ul>
                            <li>Integrate some form of networking/social user connections so that people can share recipes and possible use global recipes 
                            </li>
                            <li>Redesign the site to work better on a mobile phone screen (but still remain a web app)
                            </li>
                            <li>Port the web app over to a full mobile app using React Native.
                            </li>
                        </ul>
                        Given the challenges involved in these, I'd prefer to build up my expertise in my other projects before moving back to work on it. For the moment my development on the Recipes Project will be confined to improving the existing
                        functionality and visual polish rather than adding features.
                    </li>
                </ul>
            </div>
            <div>
                <h4>Reflections:</h4>
                <ul>
                    <li>What I've learned:
                        <ul>
                            <li>How to use React in an actual project: I'm now much more knowledgeable about State, Hooks and Context tools and how to use them, as well as being more confident at Routing</li>
                            <li>How to make and use an API server: I'd never tried this before, and while the implementation is quite simple, actually making it work took a surprising amount of learning and troubleshooting</li>
                            <li>Using Database for data storage: I'd worked with MySQL before and had some education on database structure during my University education, so I was always fairly confident in this. That said, 
                                I was able to use the database in ways I'd not expected and with a greater complexity to my queries than I'd ever used before.
                            </li>
                            <li>Unit Testing: I'd been aware of this as a major weak point in my development knowledge. I was able to move myself from being unable to test the most basic things to being able to find ways to test some 
                                quite complex interactions that were found during the testing cycle. This is the progress that I'm probably most proud of, and I'm looking forward to making use of this knowledge going forwards into 
                                other applications!
                            </li>
                            <li>Deploying the web app: Once again, this is something I'd not done before. Even when I was working at Theorem Solutions, the main problem I had was that I'd been unable to draw a line and fully finish 
                                a product. Learning about the steps needed to move an item towards a deployable/usable state and being able to finally make something that I could share was a really good moment for me, and in many ways
                                a monkey off my back.
                            </li>
                            <li>Client-Server interactions: I'd thought my knowledge of http protocols and the like was decent, but actually implementing them forced me to learn in a more concrete way, and I was able to put into effect 
                                a system that I was fairly happy with.
                            </li>
                            <li>User data and logins: I'd had some knowledge of how user data should be transferred and stored, but the actual interactions were something I was a lot hazier on. Learning about how tokens work was also
                                a good thing, as it's a technology that's becoming more and more prevalent in modern web design. Conventional site design and my own preferences also left me with a consistent question to ask myself: should I 
                                store emails in a hashed form, thus preventing them from being used in contacting/reminding the user of information, should I simply not store them (we wouldn't be able to reset the password) or should I store them
                                in a way my server would be able to access them - with all the security issues that causes.

                                To this day I'm not completely certain of the answer to that, but it's an important question.
                            </li>
                            <li>UI design and CSS: I feel like I've learned a lot in this area, but I'm still not happy with it. There's a lot of UI features and visual flairs that I'm happy with, but almost all of them involved wrestling CSS 
                                and studying - very little of it came naturally. I found that I had a lot of issues dealing with the structure of CSS files, much of which I solved by moving to nested selector notation (although Visual Studio
                                didn't like that one bit). The problem was that I struggled to move back and change my earlier CSS files to imitate, so ended up in quite a hodgepodge of different styles.

                                I'm also very aware that while I have some reasonable technical knowledge of CSS, I don't have a huge amount of artistic sensibility, something that I'll need to continue working on to find methods that work for me.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <h4>My GitHub:</h4>
                <p></p>
            </div>
        </div>
    )
}