import React from "react";
import "../styles/Dashboard.css";
import "../styles/Global.css";
import "../styles/About.css";

const About = () => (
  <div className="about-page">

    {/* PROJECT TITLE */}
    <section className="about-hero">
      <h1>High-Resolution AQI Reconstruction for India</h1>
      <p>
        An AI-enabled framework for long-term PM2.5 reconstruction and early
        warning, developed under IITI Drishti CPS.
      </p>
    </section>

    {/* ABOUT PROJECT */}
    <section className="about-section">
      <h2>About the Project</h2>
      <p>
        This project focuses on reconstructing high-resolution surface-level
        PM2.5 concentrations across India at a spatial resolution of 1 km × 1 km
        for the period 1980–2025. By integrating satellite-reanalysis products,
        meteorological variables, and ground-based observations, the system
        enables long-term spatiotemporal air-quality assessment to support
        environmental research, policy planning, and public health analysis.
      </p>
    </section>

    {/* METHODOLOGY */}
    <section className="about-section">
      <h2>Methodology Overview</h2>

      <p>
        The AQI-Warning System is built on a unified Machine Learning–Deep Learning
        (ML–DL) ensemble framework designed to generate hourly PM2.5 estimates
        with high spatial and temporal fidelity.
      </p>

      <ul className="science-list">
        <li>
          <strong>Multi-Source Data Integration:</strong> Combines ground
          monitoring data, long-term satellite-reanalysis aerosol products, and
          meteorological predictors including wind, precipitation, temperature,
          and boundary layer height.
        </li>
        <li>
          <strong>Spatiotemporal Downscaling:</strong> Employs a hybrid approach
          using physical downscaling followed by deep learning–based
          super-resolution models to achieve 1 km resolution.
        </li>
        <li>
          <strong>ML–DL Ensemble Modeling:</strong> Integrates tree-based models
          and sequence-based deep learning architectures to capture nonlinear
          and temporal dependencies in PM2.5 formation.
        </li>
        <li>
          <strong>Explainability & Attribution:</strong> Uses explainable AI
          techniques to quantify aerosol-specific contributions and ensure model
          transparency.
        </li>
        <li>
          <strong>Long-Term Reconstruction:</strong> Applies the trained ensemble
          retrospectively to generate a consistent hourly PM2.5 dataset for
          India from 1980–2025, with uncertainty quantification.
        </li>
      </ul>
    </section>

    {/* TEAM SECTION */}
    <section className="about-section">
      <h2>Project Team</h2>

      <div className="team-grid">

        <div className="team-card">
          <h3>Abhash Raj</h3>
          <p className="team-role">Software Development Engineer (SDE)</p>
          <p className="team-desc">
            Undergraduate student (B.Tech, 3rd Year) in Mathematics and Computing,
            responsible for full-stack development, system architecture, and
            deployment of the AQI platform.
          </p>
        </div>

        <div className="team-card">
          <h3>Namaswi</h3>
          <p className="team-role">Software Development Engineer (SDE)</p>
          <p className="team-desc">
            Undergraduate student (B.Tech, 3rd Year) in Mathematics and Computing,
            contributing to backend development, system integration, and
            software engineering components.
          </p>
        </div>

        <div className="team-card">
          <h3>Shlok</h3>
          <p className="team-role">Machine Learning Developer</p>
          <p className="team-desc">
            Undergraduate student (B.Tech, 2nd Year) in Mathematics and Computing,
            contributing to machine learning model development, training, and
            validation for PM2.5 estimation.
          </p>
        </div>

        <div className="team-card">
          <h3>Aditya</h3>
          <p className="team-role">IoT & Sensor Systems Developer</p>
          <p className="team-desc">
            Undergraduate student (B.Tech, 2nd Year) in Mathematics and Computing,
            responsible for IoT sensor integration, data acquisition, and
            hardware interfacing for air-quality monitoring.
          </p>
        </div>

        <div className="team-card">
          <h3>Dr. Mayank</h3>
          <p className="team-role">Faculty Mentor</p>
          <p className="team-desc">
            Faculty mentor providing research guidance, scientific oversight,
            and domain expertise for the AQI reconstruction framework under
            IITI Drishti CPS.
          </p>
        </div>

      </div>
    </section>

  </div>
);

export default About;
