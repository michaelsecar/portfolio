import HomePage from './pages/HomePage'
import HomeMore from './pages/HomeMore'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import NavigationButton from './components/NavigationButton'

import FiberCanvas from './components/FiberCanvas'

import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <div id="section1">
          <HomePage/>
        </div>
        <div id="section2">
          <HomeMore/>
        </div>
        <div id="section3">
          <Contact/>
        </div>
        <div id="section4">
          <Footer/>
        </div>
      </div>
      <div>
        <FiberCanvas/>
      </div>
      <div className="navigation-container">
        <NavigationButton/>
      </div>
    </div>
  )
}

export default App
