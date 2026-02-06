import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MapView from '../components/MapView';
import "../styles/Dashboard.css";

const Analyzer = () => {
  const [coords, setCoords] = useState({ lat: 23.25, lon: 77.41 });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalysis = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/api/analyze?lat=${coords.lat}&lon=${coords.lon}`);
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Backend connection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar coords={coords} setCoords={setCoords} onRun={handleAnalysis} data={data} loading={loading} />
      <MapView lat={coords.lat} lon={coords.lon} />
    </div>
  );
};

export default Analyzer;