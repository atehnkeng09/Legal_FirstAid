import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { signupData } from "../utils/signupData";

function Login() {
  const [isExpert, setIsExpert] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [matricule, setMatricule] = useState("");
  
  const [specialization, setSpecialization] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // API Base URLs
  const REGISTER_URL = "https://rrn24.techchantier.com/Legal_First_Aid/public/api/register";
  const LOGIN_URL = "https://rrn24.techchantier.com/Legal_First_Aid/public/api/login";

  const toggleRole = () => setIsExpert(!isExpert);
  const toggleSignup = () => setIsSignup(!isSignup);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let response, data;
      const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
      };

      if (isSignup) {
        let formData;

        if (isExpert) {
          formData = new FormData();
          let data = signupData({name, email, password, role: "lawyer"});
          
          for(let k in data){
            formData.append(`${k}`, data[k]);
          }
          // formData.append("name", name);
          // formData.append("email", email);
          // formData.append("password", password);
          // formData.append("role", "lawyer");
          formData.append("matricule", matricule);
          formData.append("specialization", specialization);
          if (image) {
            formData.append("image", image);
          }

          response = await fetch(REGISTER_URL, {
            method: "POST",
            body: formData, 
          });

        } else {
          // formData = JSON.stringify({
          //   name,
          //   email,
          //   password,
          //   confirmPassword: password,
          //   cpassword: password,
          //   confirm_password: password,
          //   role: "normal_user",
          // });
          formData = JSON.stringify(signupData({name, email, password, role: "normal_user"}))
          

          response = await fetch(REGISTER_URL, {
            method: "POST",
            headers,
            body: formData,
          });
        }

        data = await response.json();
        if (!response.ok) throw new Error(data.message || "Signup failed");
        console.log("Signup Successful:", data);

      } else {
        let body = JSON.stringify({ email, password });

        response = await fetch(LOGIN_URL, {
          method: "POST",
          headers,
          body,
        });

        data = await response.json();
        if (!response.ok) throw new Error(data.message || "Login failed");
         console.log("Login Successful:", data);

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);

        if(data.user.role === "lawyer"){
          navigate("/Experts");
        }
        else {
          navigate("/");
        }
      }
    } 
    
    
    catch (err) {
      console.log("Error:", err);
      setError(err.message || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isSignup ? "Sign Up" : "Login"} as {isExpert ? "Legal Expert" : "User"} ?</h2>
 
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleFormSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />

          {isSignup && (
            <>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
              {isExpert && (
                <>
                  <input type="text" value={matricule} onChange={(e) => setMatricule(e.target.value)} placeholder="Bar License Number" required />
                  <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => setImage(e.target.files[0])} />
                  <select value={specialization} onChange={(e) => setSpecialization(e.target.value)} required>
                    <option value="">Choose Specialization</option>
                    <option value="Business Law">Business Law</option>
                    <option value="Criminal Law">Criminal Law</option>
                    <option value="Family Law">Family Law</option>
                    <option value="Property Law">Property Law</option>
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
