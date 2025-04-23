import React, {useState} from 'react';

export default function NavBar({navigate, location = "/Home"}) {

    const [currentPage, setCurrentPage] = useState(location);

    const pages = [
        { name: "Home", path: "/Home"},
        { name: "Projects",path: "/Home/Projects"},
        { name: "BestBeforeStart", path: "/Home/Projects/RecipeProject"},
        { name: "Thoughts", path: "/Home/Projects/RecipeProject/Thoughts" },
        { name: "Features", path: "/Home/Projects/RecipeProject/Features" },
        { name: "Misac", path: "/Home/Projects/MisacProject"},
        { name: "Thoughts", path: "/Home/Projects/MisacProject/Thoughts" },
        { name: "Features", path: "/Home/Projects/MisacProject/Features" },
        { name: "About Me", path: "/Home/About"},
        { name: "University", path: "/Home/About/University" },
        { name: "Employment", path: "/Home/About/Employment" },
        { name: "Unemployment", path: "/Home/About/Unemployment" },
        { name: "Retraining", path: "/Home/About/Retraining" },
        { name: "Hobbies", path: "/Home/About/Hobbies" },
    ]

    // Specifies the class name of the nav element based on the current page and the path of the element
    // active: the current page is the same as the path of the element
    // visible: the current page is a child of the path of the element
    // hidden: the current page is not a child of the path of the element
    const getClassName = (path) => {
        //example: currentPage = /Home/Projects
        if(currentPage.includes(path)) {//current page contains /Home and /Home/Projects, so both of those are active
            return "nav-element active";//as we're returning here, we don't have a conflict with the current page being active and visible
        }
        if(path.includes(currentPage) && //here we get ALL sub-paths of the current page,
            ((currentPage.match(/\//g) || []).length + 1 === (path.match(/\//g) || []).length)) {//so we check the number of slashes to ensure that only the immediate sub-paths are visible
            return "nav-element visible";
        }

        return "nav-element hidden";
    }

    // we want to set the current page within NavBar state to ensure that it re-renders when the page changes
    const navigateHandler = (path) => {
        if(getClassName(path) === "nav-element hidden") 
            return

        setCurrentPage(path);
        navigate(path);
    }

    return (
        <nav id="navigation-bar" className="nav-bar">
            <div id="navigation-list" className="nav-list" >
                {pages.map((page) => (
                        <div key={page.path} 
                            className={getClassName(page.path)} 
                            onClick={() => navigateHandler(page.path)}
                        >
                            <p>{page.name}</p>
                        </div>
                    )
                )}
            </div>
        </nav>
    )   
}