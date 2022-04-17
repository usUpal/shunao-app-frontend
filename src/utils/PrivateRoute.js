import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ Component }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth()

  const isLoggedIn = () => {
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  };

  if (isLoggedIn()) {
    return <Component />;
  }

  return <Navigate to="/login" replace state={{ from: location.pathname }} />;
}

export default ProtectedRoute;
