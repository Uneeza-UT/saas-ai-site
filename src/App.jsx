import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home"
import { useState, useEffect } from "react"
import { ThemeContext } from "./ThemeContext";
import { Toaster } from "react-hot-toast";

export default function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const lightMode = theme === "light";

  useEffect(() => {

    document.documentElement.classList.toggle("light", lightMode)

    localStorage.setItem("theme", theme)
    
  },[theme])

  const toggleLightMode = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ lightMode, toggleLightMode }}>
        <Toaster position="top-right" />
        
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  )
}

