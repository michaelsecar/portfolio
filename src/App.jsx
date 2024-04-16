import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Stack } from './components/Stack/Stack'
import { Menu } from './components/Menu/Menu'

import { useState } from 'react'
import { useEffect } from 'react'

function App() {
    const [currentSection, setCurrentSection] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')
    const [language, setLanguage] = useState(localStorage.getItem('language') ?? navigator.language.substring(0,2) ?? 'en')

    const updateTheme = (currentTheme) => {
        if (currentTheme === 'light' || currentTheme === null) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
    const updateLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage)
        localStorage.setItem('language', selectedLanguage)
    }

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        // Setting local storage and state
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }

    const handleScroll = () => {
        const sections = document.querySelectorAll('section')
        const scrollPosition = window.scrollY
        sections.forEach((section, index) => {
            if (scrollPosition >= section.offsetTop - 100) {
                setCurrentSection(index)
            }
        })
    }

    const toggleMenu= () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(()=>{
        // Theme
        const currentTheme = localStorage.getItem('theme')
        updateTheme(currentTheme)

        // Scroll
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[theme])

    return (
        <div className="App flex flex-col text-gray-900 dark:text-gray-300">
            <header>
                <Navbar currentSection={currentSection} menuOpenCallback={toggleMenu}/>
                { 
                    isMenuOpen && <Menu  
                        menuCallback={()=>toggleMenu()}
                        theme={theme}
                        themeCallback={()=>toggleTheme()}
                        language={language}
                        languageCallback={updateLanguage}
                    />
                }
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
