import React from 'react';
import { Navigate } from 'react-router-dom';

// Dummy admin route (always allows access for now)
const AdminRoute = ({ children }) => {
  const isAdmin = true; // ✅ hardcoded for now

  return isAdmin ? children : <Navigate to="/" replace />;
};

export default AdminRoute;
