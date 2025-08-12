import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HousingAnalysisPage from "./pages/HousingAnalysisPage";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <h1>Housing Dashboard</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/housing-analysis">Housing Analysis</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/housing-analysis" element={<HousingAnalysisPage />} />
      </Routes>
    </>
  );
}
