import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import SoftSkills from "./components/Soft-skills/Soft-skills";
import Projects from "./components/Projects/Projects";
import Career from "./components/Career/Career"; // Importada aqui no final

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <SoftSkills />
      <Projects />
      <Career /> {/* Posicionada como a última aba antes do fim da página */}
    </>
  );
}

export default App;
