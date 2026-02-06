import React from 'react';
import "../styles/Dashboard.css";
import "../styles/Global.css"
const Home = () => {
  return (
    <div className="page-container">
      <div className="hero-text">
        <h1>High-Resolution PM2.5 Reconstruction</h1>
        <p>National Spatiotemporal AI Mapping for India (1980–2025)</p>
      </div>

      <div className="methodology-grid">
        <div className="formal-card">
          <h3>1 km Spatiotemporal Scaling</h3>
          <p>Utilizing an ML-DL ensemble to downscale satellite data into a physically consistent grid across India.</p>
        </div>
        <div className="formal-card">
          <h3>Atmospheric Variable Fusion</h3>
          <p>Integrating Wind, PBLH, and Temperature to resolve complex vertical dispersion patterns.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;