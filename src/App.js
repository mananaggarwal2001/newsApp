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
  const key = "";
  const [progress, setprogress] = useState({ progress: 0 })
  const [darkMode, setdarkMode] = useState("light")

  const handleDarkMode = () => {
    if (darkMode === 'light') {
      setdarkMode("dark");
      document.body.style.background = "black"
    } else {
      setdarkMode('light')
      document.body.style.background = "white"
    }
  }
  return (
    <BrowserRouter>
      <Navbar toggleMode={handleDarkMode} darkMode={darkMode} />
      <LoadingBar
        color={darkMode==='dark'?'white':'purple'}
        progress={progress}
        height={3}
        shadow={true}
      />
      <Routes>
        <Route path='/' element={<News setProgress={setprogress} key='sports1' pageSize={pageSize} country={country} categories='sports' apiKey={key} darkMode={darkMode} />}>

        </Route>
        <Route path='/business' element={<News setProgress={setprogress} key='business' pageSize={pageSize} country={country} categories='business' apiKey={key} darkMode={darkMode} />}>

        </Route>
        <Route path='/entertainment' element={<News setProgress={setprogress} key='entertainment' pageSize={pageSize} country={country} categories='entertainment' apiKey={key} darkMode={darkMode} />}>

        </Route>
        <Route path='/general' element={<News setProgress={setprogress} key='general' pageSize={pageSize} country={country} categories='general' apiKey={key} darkMode={darkMode} />}>

        </Route>
        <Route path='/health' element={<News setProgress={setprogress} key='health' pageSize={pageSize} country={country} categories='health' apiKey={key} darkMode={darkMode} />}>

        </Route>
        <Route path='/science' element={<News setProgress={setprogress} key='science' pageSize={pageSize} country={country} categories='science' apiKey={key} darkMode={darkMode} />}>

        </Route>
        <Route path='/sports' element={<News setProgress={setprogress} key='sports' pageSize={pageSize} country={country} categories='sports' apiKey={key} darkMode={darkMode} />}>

        </Route>
        <Route path='/technology' element={<News setProgress={setprogress} key='technology' pageSize={pageSize} country={country} categories='technology' apiKey={key} darkMode={darkMode} />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;