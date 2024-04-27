import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Stack } from './components/Stack/Stack'

import { ThemeContextProvider } from './providers/ThemeProvider'
import { LanguageContextProvider } from './providers/LanguageProvider'
import { MenuContextProvider } from './providers/MenuProvider'
import { SectionContextProvider } from  './providers/SectionProvider'


function App() {

    return (
        <SectionContextProvider>
            <ThemeContextProvider>
                <LanguageContextProvider>
                    <div className="App flex flex-col text-gray-900 dark:text-gray-300">
                        <MenuContextProvider>
                            <Header/>
                        </MenuContextProvider>
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
                </LanguageContextProvider>
            </ThemeContextProvider>
    </SectionContextProvider>
   )
}

export default App
