import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Training from "./components/Training";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Training />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
