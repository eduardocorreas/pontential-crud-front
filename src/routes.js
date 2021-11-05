import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Developer from "./pages/Developer";

const RoutesList = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/developer/:id" element={<Developer />} />
    </Routes>
  </Router>
);

export default RoutesList;
