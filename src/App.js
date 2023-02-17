
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  pageSize = 10;
  country = 'in'
  key = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='purple'
          progress={this.state.progress}
          height={3}
          shadow={true}
        />
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} key='sports1' pageSize={this.pageSize} country={this.country} categories='sports' apiKey={this.key} />}>

          </Route>
          <Route path='/business' element={<News setProgress={this.setProgress} key='business' pageSize={this.pageSize} country={this.country} categories='business' apiKey={this.key} />}>

          </Route>
          <Route path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country={this.country} categories='entertainment' apiKey={this.key} />}>

          </Route>
          <Route path='/general' element={<News setProgress={this.setProgress} key='general' pageSize={this.pageSize} country={this.country} categories='general' apiKey={this.key} />}>

          </Route>
          <Route path='/health' element={<News setProgress={this.setProgress} key='health' pageSize={this.pageSize} country={this.country} categories='health' apiKey={this.key} />}>

          </Route>
          <Route path='/science' element={<News setProgress={this.setProgress} key='science' pageSize={this.pageSize} country={this.country} categories='science' apiKey={this.key} />}>

          </Route>
          <Route path='/sports' element={<News setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country={this.country} categories='sports' apiKey={this.key} />}>

          </Route>
          <Route path='/technology' element={<News setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country={this.country} categories='technology' apiKey={this.key} />}>

          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}