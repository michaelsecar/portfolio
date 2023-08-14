import './index.css'

import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
    return (
        <div className="App flex flex-col items-center">
            <header>
                <Navbar/>
            </header>
            <main>
                <section>
                    <Home/>
                </section>
                <section>
                    <Projects/>
                </section>
                <section>
                    <Contact/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default App
