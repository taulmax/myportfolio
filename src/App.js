import React from "react";
import About from "./components/About";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from './components/Projects';
import Skills from "./components/Skills";
import "./styles/reset.css";
import "./styles/styles.scss";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <img className="mainBGI" src="/images/mainBGI.jpg" alt="mainBGI" />
    </>
  );
};

export default App;
