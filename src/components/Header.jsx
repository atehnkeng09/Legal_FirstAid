import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header () {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false) ;
    const navigate = useNavigate();

    useEffect (() => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token)
    }, []);

    function handleLogout() {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/Login");
    };

      return (
        <nav>
    
          <Link to="/" className="title">Legal FirstAid</Link>
    
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
    
          <ul className={menuOpen ? "open" : ""}>
            <li onClick={() => setMenuOpen(!menuOpen)}><NavLink to={"/"}>Home</NavLink></li>
            <li onClick={() => setMenuOpen(!menuOpen)}><NavLink to={"/Rights"}>Know Your Rights</NavLink></li>
            <li onClick={() => setMenuOpen(!menuOpen)}><NavLink to={"/Topics"}>Legal Topics</NavLink></li>
            <li onClick={() => setMenuOpen(!menuOpen)}><NavLink to={"/Experts"}>Contact Experts</NavLink></li>
    
    
            <div className="navbar-auth ">

              {isLoggedIn ? (
                <button className="logout-btn" onClick={handleLogout} >Logout</button>

              ) : (
             
              <>   
                <Link to={'/Login'}>
                  <button className="login-button" onClick={() => setMenuOpen(!menuOpen)}>Login</button>
                </Link>
                
                <Link to={'/Login'}>
                  <button className="signup-button" onClick={() => setMenuOpen(!menuOpen)}>Signup</button>
                </Link>
              </>        
            )}

          </div>
    
          </ul>      
    
        </nav>
      );
    }

export default Header;

