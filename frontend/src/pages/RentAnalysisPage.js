import React, { useState } from "react";
import CitySelector from "../components/CitySelector";
import StatsCard from "../components/StatsCard";

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
          {city !== "All" && (<viz-filter field="City" value={city}></viz-filter>)} 
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
          {city !== "All" && (<viz-filter field="City" value={city}></viz-filter>)}
        </tableau-viz>
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

      <div className="stats-grid">
        <StatsCard title="Title" value="val" color="green" />
        <StatsCard title="Title" value="val" color="red" />
        <StatsCard title="Title" value="xxx%" color="blue" />
        <StatsCard title="Title" value="xxx" color="purple" />
        <StatsCard title="Title" value="xxx" color="amber" />
        <StatsCard title="Title" value="xxx%" color="pink" />
      </div>

      <div className="panel panel-content">
        <h3>Key Insights:</h3>
        <ul>
          <li>
            Toronto is consistently an outlier in rent price having the highest out of all 
            Ontario cities and strays the farthest from the median
          </li>
          <li>In 2024, Elliot Lake has the lowest median rent price.</li>
          <li>
            3-bedroom units have the highest prices out of the 4 unit types, but unit types 
            appear to be growing at the same rate.
          </li>
          <li>Row structures of 3 units and over tend to have higher rent prices.</li>
          <li>All cities saw an increase in rent price in 2024 compared to 2019.</li>
          <li>
            Haldimand County saw the biggest percentage growth of <b>94.28%</b> in 
            median rent price from 2019 to 2014.
          </li>
          <li>Brock saw the lowest percentage growth of <b>10.02%</b> in median rent price from 2019 to 2014.</li>
        </ul>
      </div>
    </section>
  );
}
