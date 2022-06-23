/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
    const pageS = 10;
    const apiKey = process.env.REACT_APP_NEWS_API;
    const [progress, setProgress] = useState(0);
    
    return (
        <div>
            <Router>
                <LoadingBar color="#f11946" progress={progress} />
                <Navbar />
                <Routes>
                    <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageS} country="in" category="general" />}></Route>
                    <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageS} country="in" category="business" />}></Route>
                    <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageS} country="in" category="entertainment" />}></Route>
                    <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageS} country="in" category="health" />}></Route>
                    <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageS} country="in" category="science" />}></Route>
                    <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageS} country="in" category="sports" />}></Route>
                    <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageS} country="in" category="technology" />}></Route>
                </Routes>
            </Router>
        </div>
    )

}
export default App;