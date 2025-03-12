import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { faBars, faTimes } from "react-icons/fa";

function Header () {
  const navigate = useNavigate();
  // const [Dog, setDogImage] = useState("");

  // function registerUser(){
  //   const userDetails = {
  //     username: 'lkjdljsfd',
  //     email: 'kljdflf2@gmail.com',
  //     password: "ljsldfjo"
  //   }

  //   axios('lkjsdlfjsdlfs', {
  //     method: 'post',
  //     body: JSON.stringify(userDetails)
  //   })
  // }

  // useEffect(() => {

  //   async function fetchData(){
  //     const response = await fetch("https://rrn24.techchantier.site/Legal_First_Aid/public/api/user");
  //     const data = await response.json();
  //     console.log(data)

  //     setDogImage(data.message);
  //   }

  //   fetchData();

    
  // }, [])



  async function getUser() {
    const url = new URL(
        "https://rrn24.techchantier.site/Legal_First_Aid/public/api/situations/omnis/suggestions"
    );
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user = await response.json();
        console.log("User: ", user); 
        return user; 

    } catch (error) {
        console.error("Error fetching user data:", error);
        return null; 
    }
}

getUser();



  return (
    
      <header>

          <h3 className="logo">
            <Link to="/">Legal FirstAid</Link>
          </h3>

          <nav className="navbar">       
              <Link to="/">Home</Link>
              <Link to="/Rights">Know your Rights</Link>
              <Link to="/Topics">Legal Topics</Link>
              <Link to="/Experts">Contact Experts</Link>  
                 
          </nav>

          <div className="navbar-auth">
            <Link to={'/Login'}>
              <button className="login-button">Login</button>
            </Link>
            <button className="signup-button" onClick={() => navigate('/Login')}>Signup</button>
          </div>
          
          <button>

          </button>
          <button>

          </button>
      </header>
    
  )
}

export default Header;