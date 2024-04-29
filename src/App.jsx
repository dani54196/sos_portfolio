import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Layouts/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Term from "./pages/Term";
import Questions from "./pages/Questions";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Term />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
