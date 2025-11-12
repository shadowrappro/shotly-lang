import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <Hero />
        <SectionOne />
        <Boost />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
