// import React from 'react'
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/> 
    <MyWork/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App