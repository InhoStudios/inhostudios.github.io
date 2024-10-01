import React from "react";
import { Navbar } from "~/components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "~/components/Footer";

export function Layout() {
  return (
    <>
      <Navbar />
      <div className="ilds-decoration ilds-decoration--with-sidebar mt-1">
        <div></div>
      </div>
      <div className="container--ilds container--ilds-sidebar px-3">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
