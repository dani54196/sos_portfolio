import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills";
import Service from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Hireme from "../components/Hireme";
import Pay from "../components/Pay";
import Contact from "../components/Contact";
import WorkFlows from "../components/WorkFlows";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <WorkFlows />
      <Skills />
      <Projects />
      <Pay />
      {/* <Testimonials /> */}
      <Hireme />
      <Contact />
    </>
  );
};

export default Home;
