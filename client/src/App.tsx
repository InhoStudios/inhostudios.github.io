import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Throbber } from "./components/Throbber";
import { getHID, initUser } from "~/utilities/auth";
import { ToastContainer } from "~/components/Toast";

export function App() {
  const [loaded, setLoaded] = useState(false);

  const loadUser = async () => {
    const storedTokenString = localStorage.getItem("token");

    if (storedTokenString) {
      await initUser(JSON.parse(storedTokenString));
    }

    setLoaded(true);
  };

  useEffect(() => {
    // generate machine ID
    getHID();
    loadUser();
  }, []);

  if (!loaded) {
    return <Throbber />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
