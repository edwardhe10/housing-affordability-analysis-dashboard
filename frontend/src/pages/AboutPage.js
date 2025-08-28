import React from "react";

export default function AboutPage() {
  return (
    <div className="page about">

      {/* What is the Project */}
      <section className="panel about-card">
        <h2>📌 What is This Project?</h2>
        <p>
          This project was created by two Canada Summer Jobs workers at GLOCAL Foundation of Canada, 
          which aims to bring awareness to civic problems across the country. 
          As students in Ontario, we've experienced firsthand the challenges of apartment hunting and 
          the rapid rise of rents in student-focused cities. This website was created to share clear information 
          that can help other renters make informed decisions and bring awareness to housing affordability while 
          renting. It includes a rent and income analysis, offering insight into how costs have changed over the 
          past 5 years and what that means for renters across Ontario.
        </p>
        <p>
          The goal is to empower Canadians with clear insights into how housing
          affordability is changing over time.
        </p>
      </section>

      {/* Why */}
      <section className="panel about-card">
        <h2>💡 Why We Chose to Do This</h2>
        <p>
          Housing is one of the largest expense for most households, yet the data can be overwhelming 
          and inaccessible. By visualizing this information clearly, we wanted to make affordability 
          patterns transparent and accessible for everyone.
        </p>
      </section>

      {/* Datasets */}
      <section className="panel about-card">
        <h2>📊 Datasets Used</h2>
        <ul className="about-list">
          <li>
            <strong>Income data: </strong>
            <a
              href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110019001"
              target="_blank"
              rel="noreferrer">
              Statistics Canada — Table 11-10-0190-01
            </a>
          </li>
          <li>
            <strong>Rent data: </strong>
            <a
              href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301"
              target="_blank"
              rel="noreferrer">
              Statistics Canada — Table 34-10-0133-01
            </a>
          </li>
        </ul>
      </section>

      {/* Process and Challenges*/}
      <section className="panel about-card">
        <h2>🛠️ Process</h2>
        <ul className="about-list">
          <li>Researched and collected public data from official sources to plan project and visualizations.</li>
          <li>Used Python Pandas for data cleaning, analysis, and plotted graphs for planning.</li>
          <li>Led 2 volunteers to assist in initial data cleaning and exploratory analysis.</li>
          <li>Used Tableau to create data visualizations, filters, and dashboards.</li>
          <li>Used React to create an interactive webpage with visualizations.</li>
        </ul>
        <h2>⚠️ Challenges Faced</h2>
        <ul className="about-list">
          <li>
            Finding consistent data and city borders. Different datasets on Statistics Canada and 
            CMHC used different census borders like Census Metropolitan Areas (CMA) or Survey Zones.
          </li>
          <li>
            Creating our own map of census borders. Originally wanted to create a map of census zones 
            to add to data visualizations using Geopandas and shape files, but struggled to align cities.
          </li>
          <li>
            Implementing a dropdown filter for Tableau visualizations. Initially, the city dropdown 
            did not sync properly with Tableau's built-in filters.
          </li>
        </ul>
      </section>

      {/* Future Plans */}
      <section className="panel about-card">
        <h2>🧭 Future Plans</h2>
        <ul className="about-list">
          <li>Add affordability index calculations (Rent ÷ Income).</li>
          <li>Explore regional comparisons (urban vs. rural).</li>
          <li>Expand beyond Ontario into more provinces.</li>
          <li>Redo Unit Analysis by using CMHC number of units data.</li>
          <li>Add interactive map.</li>
          <li>Build a predictive model to predict future housing trends.</li>
        </ul>
      </section>

      {/* About Us */}
      <section className="panel about-card">
        <h2>👥 About Us</h2>
        <p>
          My name is Anna Wang! I'm currently a second year student studying Data Science 
          at the University of Waterloo and have an interest in combining technology and finance! 
          I enjoyed experimenting and learning new skills while using visuals in this project and 
          look forward to trying new things!
        </p>
        <p>
          My name is Edward He and I'm currently a third year student studying Computational Mathematics
          at the University of Waterloo. I have a strong interest in using data to solve real-world problems.
          I enjoyed learning new skills in data analysis and visualization and I look forward to using these skills
          in the future for machine learning and data science.
        </p>
      </section>
    </div>
  );
}
