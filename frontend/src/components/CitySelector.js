import React, { useEffect, useState } from "react";

export default function CitySelector({ value, onChange }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("/cities.json")
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.error("Failed to load cities:", err));
  }, []);

  return (
    <div className="selector">
      <label>City: </label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {cities.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
