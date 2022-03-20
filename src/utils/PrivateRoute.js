import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function ProtectedRoute({ Component }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = () => {
    const token = localStorage.getItem("idToken");

    if (!token) {
      return false;
    }

    const decodedToken = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;
    return decodedToken.exp > currentTime;
  };

  if (isLoggedIn()) {
    return <Component />;
  }

  return <Navigate to="/login" replace state={{ from: location.pathname }} />;
}

export default ProtectedRoute;
