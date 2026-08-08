import { useEffect, useState } from "react";
import "./Portfolio.css";
import resume from "../assets/Nayana_Resume.pdf";


function Portfolio(){

const [data,setData] = useState(null);


useEffect(()=>{

fetch("http://localhost:5000/api/portfolio")

.then((res)=>res.json())

.then((result)=>{

setData(result);

})

.catch((error)=>{

console.log(error);

});


},[]);



if(!data){

return(

<h2>
Loading Portfolio...
</h2>

)

}



return(

<div className="portfolio-page">



{/* HERO SECTION */}


<section className="portfolio-hero">


<div className="portfolio-text">


<h1>

{data.name} 🚀

</h1>



<h2>

{data.role}

</h2>



<p>

{data.bio}

</p>



<a

href={resume}

download="Nayana_Resume.pdf"

className="resume-btn"

>

Download Resume

</a>


</div>





<div className="profile-box">


<img

src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

alt="profile"

/>


</div>



</section>







{/* ABOUT SECTION */}


<section className="portfolio-about">


<h2>

About Me

</h2>


<h3>

Nayana Nagraj

</h3>



<p>

I am a Frontend Developer skilled in creating modern
responsive web applications using React, JavaScript,
HTML and CSS.

I love building clean UI designs and user-friendly websites.

</p>


</section>








{/* SKILLS SECTION */}


<section className="portfolio-skills">


<h2>

Technical Skills

</h2>



<div className="skills">


{

data.skills.map((skill,index)=>(

<span key={index}>

{skill}

</span>


))

}


</div>


</section>








{/* PROJECTS SECTION */}


<section className="portfolio-project-section">


<h2>

Projects

</h2>



<div className="portfolio-projects">


{

data.projects.map((project,index)=>(


<div

className="portfolio-project-card"

key={index}

>


<h3>

{project.title}

</h3>



<p>

{project.description}

</p>


</div>


))


}


</div>



</section>






</div>


)


}


export default Portfolio;