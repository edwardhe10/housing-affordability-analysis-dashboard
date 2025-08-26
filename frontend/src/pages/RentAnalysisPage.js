import React, { useState } from "react";
import CitySelector from "../components/CitySelector";

export default function RentAnalysisPage() {
  const [city, setCity] = useState("");

  return (
    <section className="page">
      <div className="info-box">
        <h2>Rent Growth & Trends in Ontario</h2>

        <h3>Why Rent Analysis Matters</h3>
        <p>
          Housing costs are one of the biggest factors shaping affordability and quality of life. 
          By analyzing rent trends across Ontario cities and unit types, we can identify where housing is becoming less accessible, 
          highlight gaps between rent prices and rent growth, and provide insights for people
          making decisions about where to live. Understanding these patterns helps ensure that housing remains fair, affordable, 
          and sustainable for Canadians.
        </p>
        
        <h3>About</h3>
        <p>
          This dashboard uses Statistics Canada data to display rent prices from 2019 to 2024 across Ontario cities and areas, 
          based on census boundaries. 
          The page aims to inform renters by showing trends in rent growth, unit type, and differing cities over the past few years.
        </p>

        <p className="source">
          <b>Data Source: </b>
          <a
            href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301"
            target="_blank"
            rel="noopener noreferrer">
            Statistics Canada, Table 34-10-0133-01
          </a>
        </p>

        <h3>What You'll Find on This Page</h3>
        <ul>
          <li>
            <b>City Rent Growth: </b>
            Compare how median rents have changed across Ontario cities from 2019 to 2024. 
            Filter by location to track yearly trends.
          </li>
          <li>
            <b>Median Rent Rankings: </b>
            See which cities have the highest and lowest rents. 
            Select one or more years for different median rent prices.
          </li>
          <li>
            <b>Rent Distribution: </b>
            View how city rents spread around the average, highlighting outliers and variation.
          </li>
          <li>
            <b>Rent Growth by Unit Type: </b>
            Track how median rents have shifted for different unit sizes over time.
          </li>
          <li>
            <b>Median Rent by Unit and Structure: </b>
            Compare rent levels by both unit type and housing structure.
          </li>
          <li>
            <b>Percentage Growth: </b>
            Percentage increase of median rent price by city in 2024 compared to 2019.
          </li>
          <li>Key insights into affordability for rental housing.</li>
        </ul>

      </div>
      <div className="toolbar">
        <CitySelector value={city} onChange={setCity} />
      </div>

      <div className="panel panel-content">
        <tableau-viz id="tableauViz"
            style={{ width: "100%", height: "100vh" }}
            device="desktop"
            key={city}       
            src='https://public.tableau.com/views/RentDataVisualization/CityRentGorwth'   
            toolbar="bottom"
            hide-tabs>
            {city !== "All" && (
                <viz-filter field="City" value={city}></viz-filter>
            )} 
            </tableau-viz>
      </div>
      <div className="panel panel-content">
        <tableau-viz id="tableauViz"
            style={{ width: "100%", height: "100vh" }}
            device="desktop"       
            key={city}
            src='https://public.tableau.com/views/RentDataVisualization/Dashboard1'   
            toolbar="bottom" 
            hide-tabs>
            {city !== "All" && (
                <viz-filter field="City" value={city}></viz-filter>
            )}
            </tableau-viz>
        <strong>Key Insights:</strong>
        <ul>
          <li>Overall rent trends across Ontario cities.</li>
          <li>Significant increases in certain cities post-2020.</li>
          <li>City-specific trends when a city is selected.</li>
        </ul>
      </div>
      <div className="panel panel-content">
        <tableau-viz id="tableauViz"
            style={{ width: "100%", height: "100vh" }}
            device="desktop"       
            src='https://public.tableau.com/views/RentDataVisualization/MedianRent_1'
            toolbar="bottom"
            hide-tabs>
            </tableau-viz>
      </div>
      <div className="panel panel-content">
        <tableau-viz id="tableauViz"
            style={{ width: "100%", height: "100vh" }}
            device="desktop"   
            src='https://public.tableau.com/views/RentDataVisualization/Dashboard4'   
            toolbar="bottom" 
            hide-tabs>
            </tableau-viz>
      </div>
      <div className="panel panel-content">
        <tableau-viz id="tableauViz"
            style={{ width: "100%", height: "100vh" }}
            device="desktop"   
            src='https://public.tableau.com/views/RentDataVisualization/PercentageGrowth'
            toolbar="bottom" 
            hide-tabs>
            </tableau-viz>
      </div>

      <div className="panel panel-content">
        <h3>bahhhhhhhhhhhh</h3>
      </div>
    </section>
  );
}
