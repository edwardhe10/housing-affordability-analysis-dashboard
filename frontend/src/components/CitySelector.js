import React from "react";

export default function CitySelector({ cities, value, onChange }) {
  return (
    <label>
      Select City:{" "}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </label>
  );
}
