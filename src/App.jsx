import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Importing css contents
import './App.css';
import './components/Header.css';

//Importing page components
import Home from "./pages/Home";
import Rights from "./pages/Rights";
import Topics from "./pages/Topics";
import Experts from "./pages/Experts";


function App () {
  return (
      <>
        <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Rights" element={ <Rights /> } /> 
          <Route path="/Topics" element={ <Topics /> } /> 
          <Route path="/Experts" element={ <Experts /> } /> 
        </Routes>
      </Router>

      <Footer />
      </>

      
  )
}

export default App;