import "./App.css";
import { Contact } from "./pages/Home/Contact";
import { Hero } from "./pages/Home/Hero";
import { Projects } from "./pages/Home/Projects";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <div className="">
      <Layout>
        <Hero />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
