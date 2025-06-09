import NavBar from "./components/navbar";
import Hero from "./pages/hero";
import About from "./pages/about";
import Toolbox from "./pages/toolbox";
import Projects from "./pages/projects";
import Footer from "./pages/footer";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <NavBar></NavBar>
      <Hero />
      <About />
      <Toolbox />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;