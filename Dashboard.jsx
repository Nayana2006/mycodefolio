import { Link } from "react-router-dom";
import "./Dashboard.css";


function Dashboard(){


const projects=[

{
title:"CodeFolio",
desc:"Developer Portfolio Builder using React, Node.js and MongoDB.",
tech:"React • Node.js • MongoDB",
image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
},

{
title:"Weather App",
desc:"Weather forecast application using API with responsive design.",
tech:"HTML • CSS • JavaScript • API",
image:"https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=800"
},

{
title:"To-Do App",
desc:"Task management application to organize daily activities.",
tech:"React • CSS • JavaScript",
image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
}

];



return(

<div className="dashboard-layout">



{/* SIDEBAR */}

<div className="sidebar">


<h2>
CodeFolio
</h2>


<p>
Frontend Developer
</p>



<Link to="/dashboard">
 Dashboard
</Link>



<Link to="/skills">
 Skills
</Link>



<Link to="/projects">
 Projects
</Link>



<Link to="/portfolio">
 Portfolio
</Link>



<Link to="/contact">
 Contact
</Link>



<Link to="/login">
Logout
</Link>



</div>









{/* MAIN DASHBOARD */}


<div className="dashboard">



<div className="welcome">


<h1>
 Welcome Back, Nayana 
</h1>


<p>
Manage your portfolio and projects easily.
</p>


</div>







{/* STATS */}


<div className="stats">



<div className="stat">

<h2>
 8+
</h2>

<p>
Skills
</p>

</div>




<div className="stat">

<h2>
 4
</h2>

<p>
Projects
</p>

</div>





<div className="stat">

<h2>
 100%
</h2>

<p>
Portfolio
</p>

</div>





<div className="stat">

<h2>
12
</h2>

<p>
Contacts
</p>

</div>



</div>









{/* STATUS */}



<div className="box">


<h2>
 Portfolio Status
</h2>




<div className="status-card">


<h3>
Portfolio Completed
</h3>


<p>
95% Completed
</p>


</div>






<div className="status-card">


<h3>
Projects Completed
</h3>


<p>
80% Completed
</p>


</div>






<div className="status-card">


<h3>
Skills Learned
</h3>


<p>
90% Completed
</p>


</div>



</div>









{/* PROJECTS */}



<div className="box">


<h2>
Recent Projects
</h2>



<div className="project-container">



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




<div className="content">


<h3>
{project.title}
</h3>



<p>
{project.desc}
</p>



<span>
{project.tech}
</span>



<button>
View Project
</button>



</div>



</div>



))
}



</div>



</div>





</div>



</div>


);


}


export default Dashboard;