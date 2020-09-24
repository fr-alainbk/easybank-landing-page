import React from "react";
import "./App.css";
import Articles from "./components/Articles";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
