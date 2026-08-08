import { useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaRocket
} from "react-icons/fa";

import codefolio from "../assets/codefolio.jpg";
import calculator from "../assets/calculator.jpg";
import todo from "../assets/todo.jpg";
import weather from "../assets/weather.jpg";

import "./Projects.css";


function Projects(){


const [projects] = useState([


{
title:"CodeFolio",

tech:[
"React",
"Node.js",
"MongoDB"
],

description:
"A Portfolio Builder for Developers using React, Node.js and MongoDB.",

image:codefolio,

github:
"https://github.com/yourusername/codefolio",

demo:
"https://your-codefolio.vercel.app"

},



{
title:"Weather App",

tech:[
"HTML",
"C​​SS",
"JavaScript",
"API"
],

description:
"Weather Forecast Application using API with responsive design.",

image:weather,

github:
"https://github.com/yourusername/weather-app",

demo:
"https://your-weather-app.vercel.app"

},




{
title:"To-Do App",

tech:[
"React",
"CSS",
"JavaScript"
],

description:
"Task Management Application to organize daily activities.",

image:todo,


github:
"https://github.com/yourusername/todo-app",


demo:
"https://your-todo-app.vercel.app"

},




{
title:"Calculator",

tech:[
"HTML",
"C​​SS",
"JavaScript"
],

description:
"Simple Calculator Application with modern user interface.",

image:calculator,


github:
"https://github.com/yourusername/calculator",


demo:
"https://your-calculator.vercel.app"

}



]);





return(


<div className="projects-page">



<h1>

<FaRocket/>

My Projects

</h1>


<p className="subtitle">

Here are some of my recent works.

</p>






<div className="project-grid">



{

projects.map((project,index)=>(


<div

className="project-card"

key={index}

>


<img

src={project.image}

alt={project.title}

/>




<div className="project-content">



<h2>

{project.title}

</h2>





<p>

{project.description}

</p>






<div className="tech-list">


{

project.tech.map((item,i)=>(

<span key={i}>

{item}

</span>


))

}


</div>







<div className="project-buttons">





<a

href={project.github}

target="_blank"

rel="noreferrer"

>

<button className="github-btn">

<FaGithub/>

GitHub

</button>


</a>








<a

href={project.demo}

target="_blank"

rel="noreferrer"

>

<button className="demo-btn">

<FaExternalLinkAlt/>

Live Demo

</button>


</a>






</div>





</div>





</div>


))


}



</div>






</div>


);


}


export default Projects;