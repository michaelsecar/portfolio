import HomePage from './HomePage'
import HomeMore from './HomeMore'
import Contact from './Contact'
import Footer from './Footer'

import './Html.css'

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
                <Contact/>
                </div>
                <div id="section4">
                <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Html