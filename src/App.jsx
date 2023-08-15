
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
    return (
        <div className="App flex flex-col bg-gray-800 text-gray-300 w-10/12">
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
