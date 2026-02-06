import React from 'react';
import "../styles/Dashboard.css";
import "../styles/Global.css"

const About = () => (
  <div className="page-wrapper formal-content">
    <h1>Scientific Methodology</h1>
    <section className="method-section">
      <h3>The Role of Meteorological Predictors</h3>
      <p>Our ensemble framework relies on <strong>6 primary features</strong> for downscaling:</p>
      <ul className="science-list">
        <li><strong>PBLH:</strong> Essential for modeling the "trapping" of surface-level pollutants.</li>
        <li><strong>Wind Speed:</strong> Captures the horizontal transport of particulates across the subcontinent.</li>
        <li><strong>Precipitation:</strong> Accounts for the "washout" effect (wet deposition).</li>
      </ul>
      [Image of atmospheric boundary layer and PM2.5 dispersion]
    </section>
  </div>
);

export default About;