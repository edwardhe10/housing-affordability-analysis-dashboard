import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RentAnalysisPage from "./pages/RentAnalysisPage";
import IncomeAnalysisPage from "./pages/IncomeAnalysisPage";
import "./App.css";

function Nav() {
  const { pathname } = useLocation();
  return (
    <header className="nav">
      <Link className="brand" to="/">Housing Affordability Dashboard</Link>
      <nav>
        <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={pathname === "/rent-analysis" ? "active" : ""} to="/rent-analysis">Rent Analysis</Link>
        <Link className={pathname === "/income-analysis" ? "active" : ""} to="/income-analysis">Income Analysis</Link>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rent-analysis" element={<RentAnalysisPage />} />
          <Route path="/income-analysis" element={<IncomeAnalysisPage />} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Housing Affordability</footer>
    </>
  );
}
