import React from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import { ThemeProvider } from "./context/Theme.jsx";
import { useTheme } from "./context/Theme.jsx";

function App() {
  const { darkMode } = useTheme();
  
  return (
    <BrowserRouter>
      <div
        className={`px-40 relative min-h-screen ${darkMode ? "bg-[#030712]  text-white" : "bg-white text-black"} `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Bottom Navigation */}
        <div
          className={`fixed  bottom-6 left-1/2 -translate-x-1/2 
                       ${darkMode ? " bg-black":"bg-black "} backdrop-blur-md 
                        px-10 py-1 rounded-full 
                        shadow-2xl border border-white/20`}
        >
          <Navigation />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
