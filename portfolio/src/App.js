import React from 'react';
import { HashRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/Home/HomePage"
import CVPage from "./Pages/About/CVPage"
import ProjectsPage from "./Pages/Projects/ProjectsPage"
import RecipeProjectThoughts from './Pages/Projects/RecipeProject/RecipeProjectThoughts';
import RecipeProjectFeatures from './Pages/Projects/RecipeProject/RecipeProjectFeatures';
import RecipeProjectSummary from './Pages/Projects/RecipeProject/RecipeProjectSummary';
import MisacProjectThoughts from './Pages/Projects/MisacProject/MisacProjectThoughts';
import MisacProjectFeatures from './Pages/Projects/MisacProject/MisacProjectFeatures';
import MisacProjectSummary from './Pages/Projects/MisacProject/MisacProjectSummary';
import Layout from './Pages/Layout';
import './App.css';

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage/>} />
                        <Route path="Home" >
                            <Route index element={<HomePage/>} />
                            <Route path="About">
                                <Route index element={<CVPage/>} />
                            </Route>
                            <Route path="Projects">
                                <Route index element={<ProjectsPage />}/>
                                <Route path="RecipeProject">
                                    <Route index element={<RecipeProjectSummary/>} />
                                    <Route path="Thoughts" element={<RecipeProjectThoughts/>} />
                                    <Route path="Features" element={<RecipeProjectFeatures/>} />
                                </Route>
                                <Route path="MisacProject">
                                    <Route index element={<MisacProjectSummary/>} />
                                    <Route path="Thoughts" element={<MisacProjectThoughts/>} />
                                    <Route path="Features" element={<MisacProjectFeatures/>} />
                                </Route>
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </HashRouter>
        </>
  );
}

export default App;
