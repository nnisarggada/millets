import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cast from "./components/Cast";
import Bts from "./components/Bts";
import Iyom from "./components/Iyom";
import Ah from "./components/Ah";
import TypeformWidget from "./components/TypeformWidget";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/shows" element={<TypeformWidget />} />
        </Routes>
      </Router>
    </>
  );
}

function IndexPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cast />
      <Bts />
      <Iyom />
      <Ah />
    </>
  );
}
