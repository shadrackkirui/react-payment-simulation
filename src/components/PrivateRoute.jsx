import React from 'react';
import { Navigate } from 'react-router-dom';

// Dummy private route (always allows access for now)
const PrivateRoute = ({ children }) => {
  const isAuthenticated = true; // ✅ hardcoded for now

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
