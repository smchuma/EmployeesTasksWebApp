import React from "react";
import { Outlet } from "react-router-dom";
import DashHeader from "../DashHeader/DashHeader";
import DashFooter from "../DashFooter/DashFooter";
import "./dashLayout.scss";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};

export default DashLayout;
