import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        {/* Left: Text content */}
        <div style={{ flex: 1 }}>
          <h2>
              {/* Hi, I’m Masy Golriz. a back-end developer turning ideas into clean code using  ASP.Net core, C#, EntityFramework and, SQL
               leveraging design patterns, clean architecture and best practices. */}
               Hey there, I’m Masy Golriz. I translate ideas into solid back-end code—ASP.NET Core, C#, EF, and SQL—crafted with design patterns and a passion for maintainable software.
          </h2>
          <p>
             Let's bring your ideas to life.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
            <a href="#projects" className="btn btn-primary" aria-label="View Projects">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary" aria-label="Hire Me">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Visual block (illustration placeholder) */}
        <div style={{ flex: 1, minHeight: 320, display: 'grid', placeItems: 'center' }}>
          {/* Simple neon-glow card as illustration placeholder; replace with SVG/PNG later */}
          <div
            aria-label="Hero illustration"
            style={{
              width: '100%', maxWidth: 420, height: 320, borderRadius: 20,
              background: 'radial-gradient(circle at 30% 20%, rgba(124,92,255,.25), transparent 40%),' +
                          'radial-gradient(circle at 70% 70%, rgba(34,211,238,.25), transparent 40%),' +
                          '#141a2b',
              border: '1px solid rgba(255,255,255,.15)',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,.4)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle decorative lines to feel techy */}
            {/* <svg width="100%" height="100%" viewBox="0 0 420 320" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#7c5cff" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#22d3ee" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path d="M20,260 C120,180 240,180 400,80" stroke="url(#lineGrad)" strokeWidth="2" fill="none" opacity="0.8" />
              <path d="M20,280 C140,200 260,160 400,100" stroke="url(#lineGrad)" strokeWidth="2" fill="none" opacity="0.5" />
            </svg> */}
 <svg
  viewBox="0 0 900 600"
  width="100%"
  height="auto"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="title desc"
>
  <title id="title">Microservices Hexagonal Layout with Icons</title>
  <desc id="desc">Hexagons connected with neon lines, representing microservices with C# and .NET motifs in a neon style.</desc>

  <rect x="0" y="0" width="900" height="600" fill="url(#bgGradient)"/>


  <defs>
    <linearGradient id="bgGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b0f1a"/>
      <stop offset="100%" stop-color="#0b0f1a"/>
    </linearGradient>

    <linearGradient id="neon" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6ef3ff"/>
      <stop offset="100%" stop-color="#4d9eff"/>
    </linearGradient>
  </defs>


  <symbol id="hex" viewBox="-50 -50 100 100">
    <polygon points="0,-50 43,-25 43,25 0,50 -43,25 -43,-25"
      stroke="url(#neon)" stroke-width="3" fill="none"/>
  </symbol>


  <symbol id="icon-cloud" viewBox="0 0 100 100">
    <path d="M30 60a15 15 0 0 1 0-30 20 20 0 0 1 40 0 15 15 0 0 1 0 30H30z"
      stroke="url(#neon)" stroke-width="3" fill="none"/>
  </symbol>

  <symbol id="icon-db" viewBox="0 0 100 100">
    <ellipse cx="50" cy="25" rx="25" ry="10" stroke="url(#neon)" stroke-width="3" fill="none"/>
    <path d="M25 25v50a25 10 0 0 0 50 0V25" stroke="url(#neon)" stroke-width="3" fill="none"/>
  </symbol>

  <symbol id="icon-csharp" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="30" stroke="url(#neon)" stroke-width="3" fill="none"/>
    <text x="50" y="58" font-size="20" text-anchor="middle" fill="url(#neon)" font-family="monospace">C#</text>
  </symbol>

  <symbol id="icon-dotnet" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="30" stroke="url(#neon)" stroke-width="3" fill="none"/>
    <text x="50" y="58" font-size="18" text-anchor="middle" fill="url(#neon)" font-family="monospace">.NET</text>
  </symbol>

  <symbol id="icon-lock" viewBox="0 0 100 100">
    <rect x="30" y="45" width="40" height="35" rx="6" ry="6"
      stroke="url(#neon)" stroke-width="3" fill="none"/>
    <path d="M40 45v-10a10 10 0 0 1 20 0v10"
      stroke="url(#neon)" stroke-width="3" fill="none"/>
  </symbol>

  <symbol id="icon-api" viewBox="0 0 100 100">
    <circle cx="30" cy="50" r="8" stroke="url(#neon)" stroke-width="3" fill="none"/>
    <circle cx="70" cy="30" r="8" stroke="url(#neon)" stroke-width="3" fill="none"/>
    <circle cx="70" cy="70" r="8" stroke="url(#neon)" stroke-width="3" fill="none"/>
    <line x1="38" y1="50" x2="62" y2="30" stroke="url(#neon)" stroke-width="3"/>
    <line x1="38" y1="50" x2="62" y2="70" stroke="url(#neon)" stroke-width="3"/>
  </symbol>

  <symbol id="icon-queue" viewBox="0 0 100 100">
    <rect x="25" y="35" width="50" height="30" stroke="url(#neon)" stroke-width="3" fill="none"/>
    <line x1="40" y1="50" x2="60" y2="50" stroke="url(#neon)" stroke-width="3"/>
    <line x1="70" y1="50" x2="85" y2="50" stroke="url(#neon)" stroke-width="3" marker-end="url(#arrow)"/>
  </symbol>


  <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#6ef3ff"/>
  </marker>

 
  <g transform="translate(450,300)">
   
    <use href="#hex" />
    <use href="#icon-cloud" x="-50" y="-50" width="100" height="100"/>

   
    <g transform="translate(0,-100)">
      <use href="#hex"/>
      <use href="#icon-db" x="-50" y="-50" width="100" height="100"/>
    </g>

   
    <g transform="translate(86,-50)">
      <use href="#hex"/>
      <use href="#icon-csharp" x="-50" y="-50" width="100" height="100"/>
    </g>

   
    <g transform="translate(86,50)">
      <use href="#hex"/>
      <use href="#icon-dotnet" x="-50" y="-50" width="100" height="100"/>
    </g>

  
    <g transform="translate(0,100)">
      <use href="#hex"/>
      <use href="#icon-lock" x="-50" y="-50" width="100" height="100"/>
    </g>

 
    <g transform="translate(-86,50)">
      <use href="#hex"/>
      <use href="#icon-api" x="-50" y="-50" width="100" height="100"/>
    </g>

  
    <g transform="translate(-86,-50)">
      <use href="#hex"/>
      <use href="#icon-queue" x="-50" y="-50" width="100" height="100"/>
    </g>
  </g>

  <g stroke="url(#neon)" stroke-width="2" opacity="0.6">
    <line x1="450" y1="300" x2="450" y2="200"/>
    <line x1="450" y1="300" x2="536" y2="250"/>
    <line x1="450" y1="300" x2="536" y2="350"/>
    <line x1="450" y1="300" x2="450" y2="400"/>
    <line x1="450" y1="300" x2="364" y2="350"/>
    <line x1="450" y1="300" x2="364" y2="250"/>
  </g>

</svg> 



            <span style={{ zIndex: 1, color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              Hero illustration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}