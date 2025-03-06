import React from "react";
import { Link } from "react-router-dom";

function Header () {
  return (
    <>
      <Header>
        <nav className="navbar">

          <div className="logo">
            <Link to="/">Legal FirstAid</Link>
          </div>
          <div className="navbar">
           <div className="left-header">
              <Link to="/">Home</Link>
              <Link to="/Rights">Know your Rights</Link>
              <Link to="/Topics">Legal Topics</Link>
              <Link to="/Experts">Contact Experts</Link>
           </div>
          </div>

          <div className="navbar-auth">
            <button className="login-button">Login</button>
            <button className="signup-button">Signup</button>
          </div>
          
        </nav>
      </Header>
    </>
  )
}

export default Header;