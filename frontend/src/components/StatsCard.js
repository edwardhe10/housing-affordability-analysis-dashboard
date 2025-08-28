import React from "react";

/**
 * Props:
 * - title: string
 * - value: string | number
 * - delta: string (e.g., "3.48%")
 * - deltaDir: "up" | "down" | "flat"
 * - since: string (e.g., "Since last month")
 * - accent: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink"
 * - icon: optional React node (emoji/SVG)
 */
export default function StatsCard({
  title = "TITLE",
  value = "0",
  showMeta = false,
  delta = "0%",
  deltaDir = "flat",
  since = "Since last period",
}) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className="stat-title">{title}</div>
      </div>

      <div className="stat-value">{value}</div>
        {showMeta && (delta || since) && (
        <div className="stat-meta">
          {delta && (
          <span className={`stat-delta ${deltaDir}`}>
            {deltaDir === "up" ? "▲" : deltaDir === "down" ? "▼" : "■"} {delta}
          </span>
          )}
          <span className="stat-since">{since}</span>
        </div>
      )}
    </div>
  );
}
