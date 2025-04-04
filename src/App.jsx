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

// importing categories
import ConsumerRights from "./categories/ConsumerRights";
import ArrestRights from "./categories/ArrestRights";
import WorkplaceRights from "./categories/WorkplaceRights";
import PropertyRights from "./categories/PropertyRights";
import Login from "./pages/Login";
import AuthSecure from "./components/AuthSecure";


function App () {
  return (
      <>
        <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Rights" element={ <Rights /> } /> 
          <Route path="/Login" element={ <Login /> } /> 
          <Route path="/Topics" element={ <Topics /> } /> 
          <Route path="/Experts" element={ 
            < AuthSecure >
              <Experts />
              </AuthSecure>
           } /> 

          {/* routes for categories */}
          <Route path="/ConsumerRights" element={ <ConsumerRights />} />

          <Route path="/ArrestRights" element={
            <ArrestRights />} />

          <Route path="/WorkplaceRights" element={<WorkplaceRights />} />

          <Route path="/PropertyRights" element=
          { <PropertyRights />} />

        </Routes>
      </Router>
       
      <Footer />

      </>

      
  )
}

export default App;