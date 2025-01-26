import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { ToastContainer } from "~/components/Toast";
import { Layout } from "./components/Layout";
import { ProjectPage } from "./pages/ProjectPage";
import { ProjectsPage } from "./pages/Projects";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="project/:index" element={<ProjectPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </HashRouter>
  );
}
