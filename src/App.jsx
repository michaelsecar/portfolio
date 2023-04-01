import HomePage from './pages/HomePage'
import HomeMore from './pages/HomeMore'
import FiberCanvas from './components/FiberCanvas'

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
      </div>
      <div>
        <FiberCanvas/>
      </div>
    </div>
  )
}

export default App
