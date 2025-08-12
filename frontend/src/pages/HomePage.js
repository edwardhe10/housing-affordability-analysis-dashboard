import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page">
      <h2>Welcome to the Housing Affordability Dashboard</h2>
      <p>
        Explore rent trends, affordability metrics, and more with interactive visualizations.
      </p>
      <Link to="/housing-analysis" className="btn">Go to Analysis</Link>
    </div>
  );
}
