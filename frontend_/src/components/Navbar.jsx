import React from 'react';
import { Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import "../styles/Global.css";

const Navbar = () => (
  <nav className="navbar-formal">
    <div className="nav-brand">
      <Wind size={28} color="#3b82f6" />
      <span>AQI-EWS <strong>India</strong></span>
    </div>

    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button className="btn-accent">System Status: Active</button>
    </div>
  </nav>
);

export default Navbar;
