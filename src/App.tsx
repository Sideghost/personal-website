import * as React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {WebUiUris} from './Pages/WebUiUris'
import {NotFoundPage} from './Pages/NotFoundPage'
import About from "./Pages/About/About";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";
import Home from "./Pages/Home/Home";


/**
 * App component.
 */
export default function App() {
    return (
        <div className="App">
            <div className="App-content">
                <Dashboard>
                    <Routes>
                        <Route path={WebUiUris.HOME} element={<Home/>}/>
                        <Route path={WebUiUris.ABOUT} element={<About/>}/>
                        <Route path={WebUiUris.EDUCATION} element={<Education/>}/>
                        <Route path={WebUiUris.EXPERIENCE} element={<Experience/>}/>
                        <Route path={WebUiUris.PROJECTS} element={<Projects/>}/>

                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </Dashboard>
            </div>
        </div>
    )
}