import React from 'react';
import { Wind } from 'lucide-react';
import "../styles/Global.css";

const Navbar = () => (
  <nav className="navbar-formal">
    <div className="nav-brand">
      <Wind size={28} color="#3b82f6" />
      <span>AQ-Reconstruction <strong>India</strong></span>
    </div>
    <div className="nav-links">
      <a href="/">Home</a>
      <a href="/analyzer">Analyzer</a>
      <a href="/about">Methodology</a>
      <button className="btn-accent">System Status: Active</button>
    </div>
  </nav>
);

export default Navbar;