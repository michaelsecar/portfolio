import HomePage from './HomePage'
import HomeMore from './HomeMore'
import Contact from './Contact'
import Footer from './Footer'

import './Html.css'
import Projects from './Projects'

const Html = () => {
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
                <Projects/>
                </div>
                <div id="section4">
                <Contact/>
                </div>
                <div id="section5">
                <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Html