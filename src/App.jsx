import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="w-full h-screen bg-blue-300 p-4 pt-24">
        <div className="w-full h-full bg-black"></div>
      </section>
    </>
  );
}
