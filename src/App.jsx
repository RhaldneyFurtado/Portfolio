import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skiils/Skills";
import SoftSkills from "./components/Soft-skills/Soft-skills"; // Aponta exatamente para a pasta e arquivo com hífen
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <SoftSkills />
      <Projects />
    </>
  );
}

export default App;
