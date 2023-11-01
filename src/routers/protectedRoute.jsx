import React from "react";
import {auth,  authAdmin } from "../utils/auth";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  if (auth.isAuthorized()) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export function AdminProtectedRoute() {
    if (authAdmin.isAuthorized()) {
      return <Navigate to="/admin" />;
    }
  
    return <Outlet />;
  }
