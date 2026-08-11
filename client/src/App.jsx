import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; // ✅ ADDED
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setDark(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "bg-[#020617] text-white" : "bg-gray-100 text-black"}>
      <Navbar dark={dark} setDark={setDark} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience /> {/* ✅ ADDED */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;