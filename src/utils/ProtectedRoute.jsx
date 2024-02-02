import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
  const isAdmin = loginInfo; // Ensure you're setting isAdmin in your loginInfo upon successful login

  return isAdmin ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;