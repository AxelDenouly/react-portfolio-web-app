import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Goals from "./components/goals/Goals";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme); // Applique l'attribut data-theme sur html
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); // Applique le nouvel attribut
    localStorage.setItem("theme", newTheme); // Sauvegarde la préférence dans localStorage
  };

  return (
    <>
      <Sidebar />
      <main className="main">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          <i 
            className={`bx ${
              theme === "light" ? "bx-toggle-left" : "bx-toggle-right"
            }`}
            
          ></i>
        </button>
        <Home />
        <About />
        <Goals />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
