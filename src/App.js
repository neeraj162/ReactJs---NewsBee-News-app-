/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


export default class App extends Component {
    pageS = 10;
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<News key="general" pageSize={this.pageS} country="in" category="general" />}></Route>
                        <Route path="/business" element={<News key="business" pageSize={this.pageS} country="in" category="business" />}></Route>
                        <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageS} country="in" category="entertainment" />}></Route>
                        <Route path="/health" element={<News key="health" pageSize={this.pageS} country="in" category="health" />}></Route>
                        <Route path="/science" element={<News key="science" pageSize={this.pageS} country="in" category="science" />}></Route>
                        <Route path="/sports" element={<News key="sports" pageSize={this.pageS} country="in" category="sports" />}></Route>
                        <Route path="/technology" element={<News key="technology" pageSize={this.pageS} country="in" category="technology" />}></Route>
                    </Routes>
                </Router>
            </div>
        )
    }
}
