import React, { useState } from "react";
import CitySelector from "../components/CitySelector";

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

      <div className="placeholder">
        <p>📊 [Graph showing trends for {selectedCity}]</p>
      </div>

      <div className="placeholder">
        <p>📈 [Affordability statistics for {selectedCity}]</p>
      </div>
    </div>
  );
}
