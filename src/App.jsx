import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Stack } from "./components/Stack/Stack";

import { MenuContextProvider } from "./providers/MenuProvider";
import { AppProvider } from "./AppProvider";

function App() {
  return (
    <AppProvider>
      <div className="App flex flex-col text-gray-900 dark:text-gray-300">
        <MenuContextProvider>
          <Header />
        </MenuContextProvider>
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="stack">
            <Stack />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
