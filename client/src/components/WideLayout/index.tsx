import React from "react";
import { Navbar } from "../Navbar";
import { Outlet } from "react-router-dom";

export function WideLayout() {
  return (
    <>
      <Navbar />
      <div className="ilds-decoration mt-1">
        <div></div>
      </div>
      <div className="container--ilds container-fluid">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}
