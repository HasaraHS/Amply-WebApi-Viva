import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");

  if (!email || !role) return <Navigate to="/" replace />;

  if (allowedRoles && !allowedRoles.includes(role))
    return <Navigate to="/unauthorized" replace />;

  return children;
}
