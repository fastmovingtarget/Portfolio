import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage"
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
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
