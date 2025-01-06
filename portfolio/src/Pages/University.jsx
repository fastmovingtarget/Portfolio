function University() {
    return (
        <div>
            <h3 name="university">University Education</h3>
            <p id="university" >My A-Levels qualified me to attend my first choice of university, the University of Birmingham, to study Physics (BSc), a three year course. 
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
                The same is true of matrices, which means that we need certain assumptions to narrow it down.  By using the two known galactic spectra provided, as well as the obvious caveat that any components would be positive only 
                (negative light not existing on intergalactic scales), we can find how much of each of the provided spectra has contributed to the whole, thus allowing us to derive the age.  While the source mathematics was beyond the 
                scope of either of my degrees, I was able to port the calculations into a Java UI application that would accept any input spectra and give their rough age.
                <br/>
                <br/>
                This project, along with my exams and coursework, was sufficient for me to graduate with merit in December that year.
                I chose not to attend this graduation as it clashed with an (unsuccessful) interview for a role as a Junior Software Developer.
                <br/>
                <br/>
            </p>
        </div>
    )
}

export default University;