// import React, { useEffect, useState } from "react";
// import "../styles/Dashboard.css";
// import Hero1 from "../assets/Hero1.jpeg";
// import Hero2 from "../assets/Hero2.jpeg";
// import Hero3 from "../assets/Hero3.jpeg";
// import Hero4 from "../assets/Hero4.jpg";
// import Hero5 from "../assets/Hero5.jpg";
// import { Link } from "react-router-dom";

// const images = [Hero1, Hero2, Hero3, Hero4, Hero5];
// const headingText = "AQI-Warning System";

// const Home = () => {
//   const [current, setCurrent] = useState(0);
//   const [displayText, setDisplayText] = useState("");

//   /* Background image rotation */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   /* Typewriter effect */
//   useEffect(() => {
//     let index = 0;
//     const typingInterval = setInterval(() => {
//       setDisplayText(headingText.slice(0, index + 1));
//       index++;
//       if (index === headingText.length) clearInterval(typingInterval);
//     }, 120);

//     return () => clearInterval(typingInterval);
//   }, []);

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <div className="hero-container">
//         <div
//           className="hero-bg"
//           style={{ backgroundImage: `url(${images[current]})` }}
//         />

//         <div className="hero-content">
//           <h2 className="typewriter-heading">{displayText}</h2>

//           <h4 className="hero-subheading">
//             AI-Driven PM2.5 Monitoring & Early Warning Platform
//           </h4>
//         </div>
//       </div>

//       {/* ================= CONTENT BELOW HERO ================= */}
//       <div className="home-below">

//         <h2 className="below-title">IITI DRISHTI CPS</h2>

//         <p className="below-text">
//           This project is developed under{" "}
//           <a
//             href="https://charakcenter.iiti.ac.in/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             IITI Drishti CPS
//           </a>.
//         </p>

//         <p className="below-text">
//           IITI Drishti CPS is a center of translational research in the domain of
//           digital healthcare, established at IIT Indore under the National Mission
//           on Interdisciplinary Cyber-Physical Systems. The center is supported by
//           the Department of Science and Technology (DST), Government of India, and
//           the IIT Indore Drishti CPS Foundation.
//         </p>

//         <p className="below-text">
//           This project focuses on high-resolution estimation of PM2.5
//           concentrations using deep learning techniques for air-quality
//           assessment and early warning systems.
//         </p>

//         <Link to="/about">
//           <button className="btn-accent">Learn More</button>
//         </Link>

//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import Hero1 from "../assets/Hero1.jpeg";
import Hero2 from "../assets/Hero2.jpeg";
import Hero3 from "../assets/Hero3.jpeg";
import Hero4 from "../assets/Hero4.jpg";
import Hero5 from "../assets/Hero5.jpg";
import { Link } from "react-router-dom";

const images = [Hero1, Hero2, Hero3, Hero4, Hero5];
const headingText = "AQI-Warning System";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [displayText, setDisplayText] = useState("");

  /* Image rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* Typewriter effect */
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(headingText.slice(0, index + 1));
      index++;
      if (index === headingText.length) clearInterval(typingInterval);
    }, 120);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="hero-container">
        <div
          className="hero-bg fade-bg"
          style={{ backgroundImage: `url(${images[current]})` }}
        />

        <div className="hero-content">
          <h2 className="typewriter-heading">{displayText}</h2>
          <h4 className="hero-subheading">
            AI-Driven PM2.5 Monitoring & Early Warning Platform
          </h4>
        </div>
      </div>

      {/* ================= HIGHLIGHTS STRIP ================= */}
      <div className="highlights-strip">
        <div>1 km Resolution</div>
        <div>Hourly PM2.5 Data</div>
        <div>1980–2025 Coverage</div>
        <div>ML–DL Ensemble</div>
      </div>

      {/* ================= CONTENT BELOW HERO ================= */}
      <div className="home-below">
        <h2 className="below-title">IITI DRISHTI CPS</h2>

        <p className="below-text">
          This project is developed under{" "}
          <a
            href="https://charakcenter.iiti.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IITI Drishti CPS
          </a>.
        </p>

        <p className="below-text">
          IITI Drishti CPS is a center of translational research in the domain of
          digital healthcare, established at IIT Indore under the National Mission
          on Interdisciplinary Cyber-Physical Systems. The center is supported by
          the Department of Science and Technology (DST), Government of India, and
          the IIT Indore Drishti CPS Foundation.
        </p>

        {/* ================= INFO CARDS ================= */}
        <div className="info-cards">
          <div className="info-card">
            <h3>PM2.5 Monitoring</h3>
            <p>
              High-resolution reconstruction of surface-level PM2.5 using
              satellite, meteorological, and ground observations.
            </p>
          </div>

          <div className="info-card">
            <h3>AI-Based Prediction</h3>
            <p>
              Machine learning and deep learning ensemble models capture complex
              spatiotemporal pollution patterns.
            </p>
          </div>

          <div className="info-card">
            <h3>Early Warning System</h3>
            <p>
              Enables data-driven air-quality assessment and early warning
              insights for long-term analysis.
            </p>
          </div>
        </div>

        <Link to="/about">
          <button className="btn-accent">Learn More</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
