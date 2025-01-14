import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/Home/HomePage"
import AboutPage from "./Pages/About/AboutPage"
import ProjectsPage from "./Pages/Projects/ProjectsPage"
import EarlyHistory from "./Pages/About/EarlyHistory"
import AboutSummaryPage from "./Pages/About/AboutSummaryPage"
import University from "./Pages/About/University"
import Employment from "./Pages/About/Employment"
import Unemployment from "./Pages/About/Unemployment"
import Retraining from "./Pages/About/Retraining"
import Hobbies from "./Pages/About/Hobbies"
import ProjectSummaryPage from "./Pages/Projects/ProjectSummaryPage"
import RecipeProjectThoughts from './Pages/Projects/RecipeProject/RecipeProjectThoughts';
import RecipeProjectFeatures from './Pages/Projects/RecipeProject/RecipeProjectFeatures';
import RecipeProjectSummary from './Pages/Projects/RecipeProject/RecipeProjectSummary';
import RecipeProjectLayout from './Pages/Projects/RecipeProject/RecipeProjectLayout';
import Layout from './Pages/Layout';
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage/>} />
                        <Route path="Home" element={<HomePage />} />
                        <Route path="About" element={<AboutPage />}>
                            <Route index element={<AboutSummaryPage/>} />
                            <Route path="AboutSummaryPage" element={<AboutSummaryPage/>} />
                            <Route path="EarlyHistory" element={<EarlyHistory/>}/>
                            <Route path="University" element={<University/>}/>
                            <Route path="Employment" element={<Employment/>}/>
                            <Route path="Unemployment" element={<Unemployment/>}/>
                            <Route path="Retraining" element={<Retraining/>}/>
                            <Route path="Hobbies" element={<Hobbies/>}/>
                        </Route>
                        <Route path="Projects" element={<ProjectsPage />}>
                            <Route index element={<ProjectSummaryPage/>} />
                            <Route path="ProjectSummary" element={<ProjectSummaryPage/>} />
                            <Route path="RecipeProject" element={<RecipeProjectLayout/>}>
                                <Route index element={<RecipeProjectSummary/>} />
                                <Route path="Summary" element={<RecipeProjectSummary/>} />
                                <Route path="Thoughts" element={<RecipeProjectThoughts/>} />
                                <Route path="Features" element={<RecipeProjectFeatures/>} />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
