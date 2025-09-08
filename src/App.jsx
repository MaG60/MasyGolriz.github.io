import React from 'react';  
import './Style.css'
//import projects from './data/projects';
// import { projects } from './data/projects';  
//import ProjectCard from './components/ProjectCard';  

export default function App() {  
  return (  
    <div className="app">  
      <header className="site-header" aria-label="Site header">  
        <div className="wrap">  
          <div className="brand" aria-label="Site name">Masy Golriz</div>  
          <nav className="nav" aria-label="Main navigation">  
            <a href="#about">About</a>  
            <a href="#experience">Experience</a>  
            <a href="#projects">Projects</a>  
            <a href="#skills">Skills</a>  
            <a href="#education">Education</a>  
            <a href="#contact">Contact</a>  
          </nav>  
        </div>  
      </header>  

      <section id="home" className="card" aria-label="Home">  
        <h1>Hi, I’m Masy Golriz — Back-end Developer</h1>  
        <p>A decade-long backend developer focused on .NET technologies, REST APIs, and SQL Server. I design scalable, maintainable enterprise solutions using clean architecture and SOLID principles.</p>  
        <a className="cta" href="#projects">View Projects</a>  
      </section>  

      <section id="about" className="card" aria-label="About me">  
        <h2>About</h2>  
        <p >Education: B.Sc. in Software Engineering. Languages: English (proficient), French (beginner), Farsi (native).</p>  
      </section>  

      <section id="experience"className="card" aria-label="Experience">  
        <h2>Experience</h2>  
        <ul>  
          <li><strong>Back-end Developer</strong> 
          — ~10 years in enterprise software for Iranian tech companies. Focus: C#, .NET Core, REST APIs, T-SQL, Agile, SOL
        </li></ul>
      </section>
      </div>
  )}  

