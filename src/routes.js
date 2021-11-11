import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import RegisterDeveloper from "./pages/Register/Developer/store";
import EditDeveloper from "./pages/Register/Developer/edit";

const RoutesList = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/developer/:id" element={<Developer />} />
      <Route path="/developer/create" element={<RegisterDeveloper />} />
      <Route path="/developer/edit/:id" element={<EditDeveloper />} />
    </Routes>
  </Router>
);

export default RoutesList;
