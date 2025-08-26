import React from "react";

export default function IncomeAnalysisPage() {
  return (
    <section className="page">
      <h2>Income Analysis</h2>

      <div className="panel panel-content">
        <tableau-viz id="tableauViz"
            style={{ width: "100%", height: "100vh" }}
            device="desktop"       
            src='https://public.tableau.com/views/IncomeAnalysis_17557250314520/Dashboard'
            toolbar="bottom"
            hide-tabs>
            </tableau-viz>
      </div>
    </section>
  );
}
