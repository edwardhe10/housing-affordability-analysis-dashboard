import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="home-wrap">
      <div className="home-heading">
        <h1>Canadian Housing Affordability</h1>
        <p className="home-sub">
          Explore rent trends and income dynamics across cities. Choose a section to get started.
        </p>
      </div>

      <div className="home-cta">
        <Link to="/about" className="cta cta-red">About</Link>
        <Link to="/rent-analysis" className="cta cta-blue">Rent Analysis</Link>
        <Link to="/income-analysis" className="cta cta-green">Income Analysis</Link>
      </div>
    </section>
  );
}
