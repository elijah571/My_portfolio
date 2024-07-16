// import React from 'react'
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/> 
    <MyWork/>
    </div>
  )
}

export default App