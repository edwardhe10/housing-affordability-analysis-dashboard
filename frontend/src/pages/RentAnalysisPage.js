import React, { useState } from "react";
import CitySelector from "../components/CitySelector";
import TableauViz from "../components/TableauViz"; // ready to use when you embed

export default function RentAnalysisPage() {
  const [city, setCity] = useState("");

  return (
    <section className="page">
      <h2>Rent Analysis</h2>
      <div className="toolbar">
        <CitySelector value={city} onChange={setCity} />
      </div>

      <div className="panel placeholder">
        <h3>Average Rent Over Time</h3>
        {<TableauViz src="https://public.tableau.com/views/housing-affordability-analysis-dashboard/Dashboard1" cityFilterField="City" cityValue={city} /> }
        <p>📊 Placeholder: Rent trends for <b>{city}</b></p>
      </div>

      <div className="panel placeholder">
        <h3>Rent Distribution / Unit Types</h3>
            <TableauViz src="https://public.tableau.com/views/RentDataVisualization/MedianRent" cityFilterField="City" cityValue={city} />
        <p>📈 Placeholder: Bar/Box plots by unit type for <b>{city}</b></p>
      </div>
    </section>
  );
}
