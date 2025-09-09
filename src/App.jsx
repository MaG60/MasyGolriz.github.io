import React from 'react';  
import './Style.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';



export default function App() {  
  return (  
    <div className="app">  
      <header className="site-header" aria-label="Site header">  
        <div className="wrap">  
         {/* <div className="brand" aria-label="Site name">Masy Golriz</div>  
           <nav className="navbar" aria-label="Main navigation">  
            <a href="#about">About</a>  
            <a href="#experience">Experience</a>  
            <a href="#projects">Projects</a>  
            <a href="#skills">Skills</a>  
            <a href="#education">Education</a>  
            <a href="#contact">Contact</a>  
          </nav>   */}
           <NavBar />
           <main>
           <Hero />
          </main>
        </div>  
      </header>  

      {/* <section id="home" className="card" aria-label="Home">  
        <h1>Hi, I’m Masy Golriz — Back-end Developer</h1>  
        <p>A decade-long backend developer focused on .NET technologies, REST APIs, and SQL Server. I design scalable, maintainable enterprise solutions using clean architecture and SOLID principles.</p>  
      <a className="cta" href="#projects">View Projects</a>   
      </section>   */}

<section id="projects"className="card" aria-label="projects">  
        <h2>Projects</h2>  
        <ul>  
          <li><strong>Tax API</strong>  </li>
          <li><strong>Sample project1</strong>  </li>
          <li><strong>Sample project2</strong>  </li>
          <li><strong>Sample project3</strong>  </li>
       
        </ul>
      </section>
       
     
      <section id="about" className="card" aria-label="About me">  
        <h2>About Me</h2>  
        <p > 10 years in enterprise software for Iranian tech companies. 
          Focus: C#, .NET Core, REST APIs, T-SQL, Agile, Microsoft Azure.
          Education: B.Sc. in Software Engineering. 
          Languages: English (proficient), French (beginner), Farsi (native).
        </p>  
      </section>  

     
      <section id="contact" className="card" aria-label="Contact me">  
        <h2>Contact Me</h2>  
        <p> Email: masy.golriz@gmail.com</p>  
      </section> 
      </div>
  )}  

