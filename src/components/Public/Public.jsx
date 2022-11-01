import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Public.scss";

const Public = () => {
  return (
    <div className="public">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Public;
