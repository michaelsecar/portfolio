
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Stack } from './components/Stack/Stack'

function App() {
    return (
        <div className="App flex flex-col text-gray-300">
            <header>
                <Navbar/>
            </header>
            <main>
                <section id="home">
                    <Home/>
                </section>
                <section id="stack">
                    <Stack/>
                </section>
                <section id="projects">
                    <Projects/>
                </section>
                <section id="contact">
                    <Contact/>
                </section>
            </main>
            <footer id="footer">
                <Footer/>
            </footer>
        </div>
    )
}

export default App
