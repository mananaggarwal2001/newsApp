
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  pageSize=10;
  country='in'
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<News key='general' pageSize={this.pageSize} country={this.country} categories='general' />}>

          </Route>
          <Route path='/business' element={<News key='business' pageSize={this.pageSize} country={this.country} categories='business' />}>

          </Route>
          <Route path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country={this.country} categories='entertainment' />}>

          </Route>
          <Route path='/general' element={<News key='general' pageSize={this.pageSize} country={this.country} categories='general' />}>

          </Route>
          <Route path='/health' element={<News key='health' pageSize={this.pageSize} country={this.country} categories='health' />}>

          </Route>
          <Route path='/science' element={<News key='science' pageSize={this.pageSize} country={this.country} categories='science' />}>

          </Route>
          <Route path='/sports' element={<News key='sports' pageSize={this.pageSize} country={this.country} categories='sports' />}>

          </Route>
          <Route path='/technology' element={<News key='technology' pageSize={this.pageSize} country={this.country} categories='technology' />}>

          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
