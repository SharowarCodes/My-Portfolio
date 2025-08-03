import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CaseStudies from "./pages/CaseStudies";
import Testimonials from "./pages/Testimonials";
import ReacentWork from "./pages/RecentWork";
import GetStarted from "./pages/GeStarted";

export default function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/ReacentWork" element={<ReacentWork />} />
        <Route path="/GetStarted" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}
