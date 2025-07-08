import React from "react";
import "./index.css"; // Tailwind CSS ko import karna zaroori hai
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}

export default App;
