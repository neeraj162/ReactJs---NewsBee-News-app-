/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
    pageS = 10;
    state = {
        progress: 0
    }
    setProgress = (progress)=>{
        this.setState({
            progress: progress,
        })
    }
    render() {
        return (
            <div>
                <Router>
                <LoadingBar color="#f11946" progress={this.state.progress}  />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageS} country="in" category="general" />}></Route>
                        <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageS} country="in" category="business" />}></Route>
                        <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageS} country="in" category="entertainment" />}></Route>
                        <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageS} country="in" category="health" />}></Route>
                        <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageS} country="in" category="science" />}></Route>
                        <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageS} country="in" category="sports" />}></Route>
                        <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageS} country="in" category="technology" />}></Route>
                    </Routes>
                </Router>
            </div>
        )
    }
}
