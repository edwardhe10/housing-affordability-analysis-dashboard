import React from "react";

/**
 * Props:
 * - title: small heading
 * - value: big highlighted value
 * - color: "green" | "red" | "blue" | "purple" | "amber" | "pink"
 */
export default function StatsCard({ title, value, color = "green" }) {
  return (
    <div className={`stat-card is-${color}`}>
      <div className="stat-card__body">
        <div className="stat-card__title">{title}</div>
        <div className="stat-card__value">{value}</div>
      </div>
    </div>
  );
}
