import React from 'react';  
import './Style.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';

  const projects = [
    /*title, description, tech, links  */
    
    { title: 'Tax API' , description: 'it is an API that collects the customer invoices and send them to the Tsx department.'
     ,links:"https://github.com/MaG60/DarayeeAPI" },
    { title: 'My Portofolio',  description: 'A landing page written with react and javascript',links:"https://github.com/MaG60/MasyGolriz.github.io?tab=readme-ov-file#masygolrizgithubio"  },
    { title: 'MmEnglish website',  description: 'An online teaching website for learning languages',links:"https://github.com/MaG60/MasyGolriz.github.io?tab=readme-ov-file#masygolrizgithubio"  },
  ];

export default function App() {  
  return (  
    <div className="app">  
      <header className="site-header" aria-label="Site header">  
        <div className="wrap">  
        
           <NavBar />
           <main>
           <Hero />
         
          </main>
         
        </div>  
      </header>  
   

      
<section id="projects"className="card" aria-label="projects">  
        <h2>Projects</h2>  
        <ProjectCard projects={projects} />
       
      {/* <ul>  
          <li><strong>Tax API</strong>  </li>
          <li><strong>Sample project1</strong>  </li>
          <li><strong>Sample project2</strong>  </li>
          <li><strong>Sample project3</strong>  </li>
       
        </ul> */}
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
        

{/* <span class="icon-pair" aria-label="Two icons">
 
  <svg className="icon" xmlns="http://www.w3.org/2000/svg"
    aria-label="WhatsApp" role="img"
    viewBox="0 0 512 512"><rect
    width="512" height="512"
    rx="15%"
    fill="#25d366"/><path fill="#25d366" stroke="#ffffff" stroke-width="26" d="M123 393l14-65a138 138 0 1150 47z"/><path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"/>
  </svg>

<svg className ="icon" width="800px" height="800px" viewBox="0 0 16 16" 
  xmlns="http://www.w3.org/2000/svg" fill="none">
  <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/></svg>


</span>  */}

<span class="icon-pair" aria-label="Two icons">

  <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" aria-label="WhatsApp" role="img">
    <rect width="512" height="512" rx="80" fill="#25d366"/>
    <path fill="#25d366" stroke="#ffffff" stroke-width="26" d="M123 393l14-65a138 138 0 1150 47z"/>
    <path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"/>
  </svg>


   <svg class="icon" width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" aria-label="Linked icon" role="img">
    <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
  </svg> 

</span>
     </section> 
      </div>
  )}  

