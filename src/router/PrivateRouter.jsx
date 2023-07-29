import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  // ? customing hook(const { user } = useAuthContext() yazilimi)
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
