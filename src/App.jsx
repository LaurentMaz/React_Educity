import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle={"Our Programs"} title={"What we offer"} />
        <Programs />
        <About />
        <Title subtitle={"Gallery"} title={"Campus photos"} />
        <Campus />
        <Title subtitle={"Testimonials"} title={"What students say"} />
        <Testimonials />
        <Title subtitle={"Contact Us"} title={"Get in Touch"} />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
