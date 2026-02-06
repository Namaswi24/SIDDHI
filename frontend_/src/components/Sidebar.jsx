import React from 'react';
import "../styles/Dashboard.css";

const Sidebar = ({ coords, setCoords, onRun, data, loading }) => (
  <div className="sidebar-formal">
    <section className="input-group">
      <h3>Coordinate Entry</h3>
      <div className="field">
        <label>Latitude (N)</label>
        <input type="number" step="0.0001" value={coords.lat} 
               onChange={e => setCoords({...coords, lat: parseFloat(e.target.value)})} />
      </div>
      <div className="field">
        <label>Longitude (E)</label>
        <input type="number" step="0.0001" value={coords.lon} 
               onChange={e => setCoords({...coords, lon: parseFloat(e.target.value)})} />
      </div>
      <button className="btn-execute" onClick={onRun} disabled={loading}>
        {loading ? "Slicing NetCDF..." : "Reconstruct PM2.5"}
      </button>
    </section>

    {data && (
      <div className="metrics-container animate-fade">
        <div className="pm-hero">
          <p>Downscaled PM2.5</p>
          <h1>{data.pm25} <span>µg/m³</span></h1>
        </div>
        <div className="weather-grid">
          <div className="w-item"><span>PBLH</span> {Math.round(data.weather.pblh)}m</div>
          <div className="w-item"><span>Wind</span> {data.weather.wind.toFixed(1)}m/s</div>
          <div className="w-item"><span>Temp</span> {data.weather.temp.toFixed(1)}°C</div>
        </div>
      </div>
    )}
  </div>
);

export default Sidebar;