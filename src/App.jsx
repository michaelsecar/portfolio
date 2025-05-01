import "./App.css";
import { Contact } from "./pages/Home/Contact";
import { Hero } from "./pages/Home/Hero";
import { Projects } from "./pages/Home/Projects";
import { Layout } from "./pages/Layout";
import { ColorProvider } from "./providers/ColorProvider";

function App() {
  return (
    <ColorProvider>
      <Layout>
        <Hero />
        <Projects />
        <Contact />
      </Layout>
    </ColorProvider>
  );
}

export default App;
