import './App.css';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './Components/Navbar';
import News from './Components/News';

const App = () => {
  const pageSize = 10;
  const country = 'in'
  const key = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState({ progress: 0 })
  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='purple'
        progress={progress}
        height={3}
        shadow={true}
      />
      <Routes>
        <Route path='/' element={<News setProgress={setprogress} key='sports1' pageSize={pageSize} country={country} categories='sports' apiKey={key} />}>

        </Route>
        <Route path='/business' element={<News setProgress={setprogress} key='business' pageSize={pageSize} country={country} categories='business' apiKey={key} />}>

        </Route>
        <Route path='/entertainment' element={<News setProgress={setprogress} key='entertainment' pageSize={pageSize} country={country} categories='entertainment' apiKey={key} />}>

        </Route>
        <Route path='/general' element={<News setProgress={setprogress} key='general' pageSize={pageSize} country={country} categories='general' apiKey={key} />}>

        </Route>
        <Route path='/health' element={<News setProgress={setprogress} key='health' pageSize={pageSize} country={country} categories='health' apiKey={key} />}>

        </Route>
        <Route path='/science' element={<News setProgress={setprogress} key='science' pageSize={pageSize} country={country} categories='science' apiKey={key} />}>

        </Route>
        <Route path='/sports' element={<News setProgress={setprogress} key='sports' pageSize={pageSize} country={country} categories='sports' apiKey={key} />}>

        </Route>
        <Route path='/technology' element={<News setProgress={setprogress} key='technology' pageSize={pageSize} country={country} categories='technology' apiKey={key} />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;