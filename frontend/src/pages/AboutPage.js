// frontend/src/pages/AboutPage.jsx
import React from "react";

export default function AboutPage() {
  return (
    <div className="page about">
      {/* Hero Header */}
      <section className="about-hero">
        <h1>About This Project</h1>
        <p className="about-hero-sub">
          Making Canada’s housing affordability data visual, accessible, and meaningful.
        </p>
      </section>

      {/* What is the Project */}
      <section className="panel about-card">
        <h2>📌 What is This Project?</h2>
        <p>
          This project explores housing affordability across Canadian cities. It combines open datasets 
          on rent, income, and unit availability into interactive Tableau dashboards that make trends 
          easy to explore and understand.
        </p>
        <p>
          The goal is to empower Canadians, policymakers, and researchers with clear insights into how 
          affordability is changing over time.
        </p>
      </section>

      {/* Why */}
      <section className="panel about-card">
        <h2>💡 Why I Chose to Do This</h2>
        <p>
          Housing is the largest expense for most households, yet the data can be overwhelming 
          and inaccessible. By visualizing this information clearly, I wanted to make affordability 
          patterns transparent and accessible for everyone.
        </p>
      </section>

      {/* Datasets */}
      <section className="panel about-card">
        <h2>📊 Datasets Used</h2>
        <ul className="about-list">
          <li>
            <strong>Income growth data:</strong>{" "}
            <a
              href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110019001"
              target="_blank"
              rel="noreferrer"
            >
              Statistics Canada — Table 11-10-0190-01
            </a>
          </li>
          <li>
            <strong>Rent data:</strong>{" "}
            <a
              href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301"
              target="_blank"
              rel="noreferrer"
            >
              Statistics Canada — Table 34-10-0133-01
            </a>
          </li>
          <li>
            Additional cleaned datasets prepared in <code>/data/</code>.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="panel about-card">
        <h2>🛠️ Process & Problems Faced</h2>
        <ul className="about-list">
          <li>Filtering datasets for years 2019–2024.</li>
          <li>Cleaning missing or zero values.</li>
          <li>Embedding Tableau dashboards with dynamic filters.</li>
          <li>Ensuring full-page responsive dashboards without scrollbars.</li>
        </ul>
      </section>

      {/* Future Plans */}
      <section className="panel about-card">
        <h2>🧭 Future Plans</h2>
        <ul className="about-list">
          <li>Add affordability index calculations (Rent ÷ Income).</li>
          <li>Explore regional comparisons (urban vs. rural).</li>
          <li>Expand beyond Ontario into more provinces.</li>
        </ul>
      </section>

      {/* About Us */}
      <section className="panel about-card">
        <h2>👥 About Us</h2>
        <p>
          This project was created as part of a Canada Summer Jobs (CSJ) research initiative, 
          with the aim of making affordability data engaging, interactive, and meaningful.
        </p>
      </section>
    </div>
  );
}
