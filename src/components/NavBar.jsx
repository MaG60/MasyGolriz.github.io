import React from 'react';
import './nav.css'; // optional for fine-tuning

export default function NavBar() {
  return (
    <header className="container" style={{ padding: '18px 0' }}>
      {/* <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}
      <nav className="navbar">
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20 }}>
          Masy Golriz
        </div>
        <ul style={{ display: 'flex', gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}