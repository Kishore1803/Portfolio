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

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <section id="About">
        <About />
      </section>

      <section id="Skill">
        <Skills />
      </section>

      <section id="Experience">
        <Experience />
      </section>

      <section id="Experience">
        <Training />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      <section id="Education">
        <Education />
      </section>

      <section id="Certifications">
        <Certifications />
      </section>

      <section id="Contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
