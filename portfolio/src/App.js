import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ProjectsPage from "./Pages/ProjectsPage"
import EarlyHistory from "./Pages/EarlyHistory"
import AboutSummaryPage from "./Pages/AboutSummaryPage"
import University from "./Pages/University"
import Employment from "./Pages/Employment"
import Unemployment from "./Pages/Unemployment"
import Retraining from "./Pages/Retraining"
import Hobbies from "./Pages/Hobbies"
import ProjectSummaryPage from "./Pages/ProjectSummaryPage"
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
                            <Route path="ProjectSummaryPage" element={<ProjectSummaryPage/>} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
