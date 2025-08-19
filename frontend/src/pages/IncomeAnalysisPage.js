import React, { useState } from "react";
import CitySelector from "../components/CitySelector";
// import TableauViz from "../components/TableauViz";

export default function IncomeAnalysisPage() {
  const [city, setCity] = useState("Toronto");

  return (
    <section className="page">
      <h2>Income Analysis</h2>
      <div className="toolbar">
        <CitySelector
          cities={["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"]}
          value={city}
          onChange={setCity}
        />
      </div>

      <div className="panel placeholder">
        <h3>Median Household Income Over Time</h3>
        {/* <TableauViz src="YOUR_TABLEAU_INCOME_VIEW_URL" cityFilterField="City" cityValue={city} /> */}
        <p>💵 Placeholder: Income trends for <b>{city}</b></p>
      </div>

      <div className="panel placeholder">
        <h3>Affordability (Rent-to-Income)</h3>
        <p>🧮 Placeholder: KPI cards & ratio charts for <b>{city}</b></p>
      </div>
    </section>
  );
}
