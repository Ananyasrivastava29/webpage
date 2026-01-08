import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>

      <Footer />
    </>
  );
}
