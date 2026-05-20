import React from "react";
import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

import Wrapper from "./Components/Wrapper";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Components/Navbar";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="ml-[37%] mt-[1.8%] sticky top-4 z-50">
        <Navbar />
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Wrapper />} />
          <Route path="/projects" element={<Wrapper page="projects" />} />
          <Route path="/progress" element={<Wrapper page="progress" />} />
          <Route path="/skills" element={<Wrapper page="skills" />} />
          <Route path="/contact" element={<Wrapper page="contact" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
