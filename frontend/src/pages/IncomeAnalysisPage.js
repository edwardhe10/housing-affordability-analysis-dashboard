import React from "react";
import StatsCard from "../components/StatsCard";

export default function IncomeAnalysisPage() {
  return (
    <section className="page">
      <div className="info-box">
        <h2>Income Growth & Trends in Ontario</h2>

        <h3>Why Income Analysis Matters</h3>
        <p>
          Understanding income growth helps track affordability, cost-of-living pressures, 
          and regional disparities. By looking at median income trends in Ontario, 
          we can see how earnings have changed over time and how they compare to rental housing trends.
        </p>
        
        <h3>About</h3>
        <p>
          This dashboard uses Statistics Canada data to display income from 2019 to 2023 in Ontario while 
          the rent prices uses the same data from the rent analysis. Median after-tax income was chosen to 
          most closely represent a renter's income state when paying rent. Additionally, data was narrowed 
          down to persons not in economic families to represent the majority of individual renters as rent 
          prices are per person. The page aims to inform renters and bring awareness to renting affordability. 
        </p>

        <p className="source">
          <b>Data Source: </b>
          <a
            href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110019001"
            target="_blank"
            rel="noopener noreferrer">
            Statistics Canada, Table 11-10-0190-01
          </a>
        </p>

        <h3>What You'll Find on This Page</h3>
        <ul>
          <li>
            <b>Income and Rent Growth Comparison: </b>
            Compares income and rent growth by using a calculated index. 
            The index was calculated by using 2019 values as baseline. </li>
          <li>
            <b>Average Percentage of Income Spent on Yearly Rent: </b>
            View how percentage of income spent on rent changes over years 
            and compares to the affordability threshold. 
            Yearly rent was calculated to compare to yearly income.</li>
          <li>Key insights into affordability for rental housing.</li>
        </ul>
      </div>

      <div className="panel panel-content">
        <tableau-viz id="tableauViz"
          style={{ width: "100%", height: "100vh" }}
          device="desktop"       
          src='https://public.tableau.com/views/IncomeAnalysis_17557250314520/Dashboard'
          toolbar="bottom"
          hide-tabs>
        </tableau-viz>
      </div>

      <section className="stat-wrap">
        <div className="stat-grid">
          <StatsCard
            title="AVERAGE INCOME SPENT ON RENT IN 2023"
            value="39.01%"
            showMeta
            delta="26.49%"
            deltaDir="up"
            since="Since 2019"/>
          <StatsCard
            title="INCOME GROWTH SINCE 2019"
            value="3.57%"/>
          <StatsCard
            title="RENT GROWTH SINCE 2019"
            value="31.02%"/>
        </div>
      </section>

      <div className="panel panel-content">
        <h3>Key Insights:</h3>
        <ul>
          <li>Rent is growing at a much faster rate than income.</li>
          <li>By 2022, rent prices have increased enough to have broken the affordability threshold of <b>30%</b>.</li>
          <li>Renting is no longer as affordable as before and if the pattern continues, many people may begin to struggle to find housing.</li>
        </ul>
      </div>
    </section>
  );
}
