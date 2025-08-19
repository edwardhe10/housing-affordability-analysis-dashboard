import React, { useState } from "react";
import CitySelector from "../components/CitySelector";
import TableauViz from "../components/TableauViz";

export default function HousingAnalysisPage() {
  const [selectedCity, setSelectedCity] = useState("Toronto");

  return (
    <div className="page">
      <h2>Housing Analysis</h2>

      <CitySelector
        cities={["Toronto", "Vancouver", "Montreal"]}
        value={selectedCity}
        onChange={setSelectedCity}
      />

      <div className="panel">
        <h3>Avg Rent Price by Year</h3>
        <TableauViz
          src="https://public.tableau.com/views/housing-affordability-analysis-dashboard/Dashboard1"
          toolbar="bottom"
          hideTabs
          height={600}
          cityFilterField="City"       // <- change to your exact field name
          cityValue={selectedCity}
        />
      </div>

      <div className="panel placeholder">
        <p>📈 [Affordability statistics for {selectedCity}]</p>
      </div>
    </div>
  );
}
