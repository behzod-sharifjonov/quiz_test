import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "./App";

function ProtecttedRoute() {
  const { login } = useContext(Context);
  return login ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtecttedRoute;
