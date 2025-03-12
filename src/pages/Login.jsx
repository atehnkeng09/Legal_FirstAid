import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [isExpert, setIsExpert] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const toggleRole = () => setIsExpert(!isExpert);
  const toggleSignup = () => setIsSignup(!isSignup);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try{
      
      let formData;
  
      if(isSignup){
  
        formData = {
          name,
          email,
          password
        }
        const response = await fetch('https://rrn24.techchantier.site/Legal_First_Aid/public/api/register', {method: 'post', body: formData});
        const data = await response.json();
        console.log(data)
      }
      else {
  
        formData = {
          email,
          password
        }
        let body = {
          "email": "kale.boyle@example.net",
          "password": "'1D<\/wT2*.\"O,r"
        };
        console.log(body)
        const response = await fetch('https://rrn24.techchantier.site/Legal_First_Aid/public/api/login', {method: 'post', body});
        const data = await response.json();
        console.log(data);
        // console.log(formData);
      }
    }catch(err){
      console.log(err);
    }

  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isSignup ? "Sign Up" : "Login"} as {isExpert ? "Legal Expert" : "User"}</h2>

        <form onSubmit={handleFormSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
          <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          
          {isSignup && (
            <>
              <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
              {isExpert && (
                <>
                  <input type="text" placeholder="Bar License Number" required />
                  <input type="file" accept=".pdf,.jpg,.png" />
                  <select>
                    <option>Choose Specialization</option>
                    <option>Business Law</option>
                    <option>Criminal Law</option>
                    <option>Family Law</option>
                    <option>Property Law</option>
                  </select>
                </>
              )}
            </>
          )}

          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        <div className="toggle-buttons">
          <p onClick={toggleSignup}>
            {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </p>
          <p onClick={toggleRole}>
            {isExpert ? "Login as User" : "Login as Legal Expert"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
