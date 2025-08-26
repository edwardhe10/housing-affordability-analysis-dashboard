import React, { useState } from "react";
import CitySelector from "../components/CitySelector";

export default function RentAnalysisPage() {
  const [city, setCity] = useState("");

  return (
    <section className="page">
      <h2>Rent Analysis</h2>
      <div className="toolbar">
        <CitySelector value={city} onChange={setCity} />
      </div>

      <div className="panel panel-content">
        <h3>Average Rent Over Time</h3>
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
        <p>📊 Placeholder: Rent trends for <b>{city}</b></p>
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
            src='https://public.tableau.com/views/RentDataVisualization/Dashboard4'   
            toolbar="bottom" 
            hide-tabs>
            </tableau-viz>
      </div>
      
      <div className="panel panel-content">
        <h3>Rent Distribution / Unit Types</h3>
        <p>📈 Placeholder: Bar/Box plots by unit type for <b>{city}</b></p>
      </div>
    </section>
  );
}
