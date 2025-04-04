import React from "react";
import { Navigate } from "react-router-dom";

function AuthSecure ({children}) {

  const token = localStorage.getItem("token");

  if(!token) {
    return <Navigate to={"/Login"} />
  }

  else {
    return children
  }

}
export default AuthSecure;