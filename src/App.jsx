import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Pay from "./components/Pay";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkFlows from "./components/WorkFlows";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Pay />
      <Service />
      <WorkFlows />
      <Skills />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
