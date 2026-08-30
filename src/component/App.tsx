import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Blogfilter from "./Blogfilter";
import BlogCard from "./BlogCard";
import Newsletter from "./Newletter";
import Footer from "./Footer";

import Dashboard from "./Dashborad/Dashboard";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  if (showDashboard) {
    return (
      <Dashboard
      darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    );
  }

  return (
    <>
      <Navbar
        onDashboard={() => setShowDashboard(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <Blogfilter />
      <BlogCard />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;