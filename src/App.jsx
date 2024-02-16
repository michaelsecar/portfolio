import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Stack } from './components/Stack/Stack'

import { useState } from 'react'
import { useEffect } from 'react'

function App() {
    const [currentSection, setCurrentSection] = useState(0)

    const handleScroll = () => {
        const sections = document.querySelectorAll('section')
        const scrollPosition = window.scrollY
        sections.forEach((section, index) => {
            if (scrollPosition >= section.offsetTop - 100) {
                setCurrentSection(index)
            }
        })
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return (
        <div className="App flex flex-col text-gray-300">
            <header>
                <Navbar currentSection={currentSection}/>
            </header>
            <main>
                <section id="home">
                    <Home/>
                </section>
                <section id="projects">
                    <Projects/>
                </section>
                <section id="stack">
                    <Stack/>
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
