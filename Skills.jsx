import { useState, useEffect } from "react";
import "./Skills.css";


function Skills(){


const [skills,setSkills]=useState(()=>{

const saved = localStorage.getItem("skills");


return saved
?
JSON.parse(saved)
:
[
{
name:"React",
level:90
},
{
name:"JavaScript",
level:85
},
{
name:"HTML & CSS",
level:95
}
];

});



const [skillName,setSkillName]=useState("");

const [skillLevel,setSkillLevel]=useState("");

const [search,setSearch]=useState("");

const [editIndex,setEditIndex]=useState(null);





useEffect(()=>{

localStorage.setItem(
"skills",
JSON.stringify(skills)
);

},[skills]);






const clearForm=()=>{

setSkillName("");

setSkillLevel("");

setEditIndex(null);

};






const addSkill=()=>{


if(!skillName || !skillLevel){

alert("Please fill all fields");

return;

}



setSkills([

...skills,

{
name:skillName,
level:Number(skillLevel)
}

]);


clearForm();


};







const deleteSkill=(index)=>{


setSkills(

skills.filter(

(_,i)=>i!==index

)

);


};







const editSkill=(index)=>{


setSkillName(
skills[index].name
);


setSkillLevel(
skills[index].level
);


setEditIndex(index);


};








const updateSkill=()=>{


const updated=[...skills];


updated[editIndex]={

name:skillName,

level:Number(skillLevel)

};



setSkills(updated);


clearForm();


};








const filteredSkills=skills.filter(

(skill)=>

skill.name

.toLowerCase()

.includes(

search.toLowerCase()

)

);






return(


<div className="skills-page">



<h1>
My Skills
</h1>


<p className="subtitle">

Manage your technical skills professionally.

</p>







<div className="skill-search">


<input

type="text"

placeholder="Search Skill..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

 />

</div>








<div className="skill-form">



<h2>

{
editIndex===null
?
"Add New Skill"
:
"Update Skill"

}

</h2>





<input

type="text"

placeholder="Skill Name"

value={skillName}

onChange={(e)=>setSkillName(e.target.value)}

/>







<input

type="number"

placeholder="Skill Level (0-100)"

value={skillLevel}

onChange={(e)=>setSkillLevel(e.target.value)}

/>






<button

onClick={
editIndex===null
?
addSkill
:
updateSkill
}

>


{

editIndex===null
?
"Add Skill"
:
"Update Skill"

}


</button>



</div>








<div className="skill-list">



{

filteredSkills.length===0

?

<h3>
No Skills Found
</h3>


:

filteredSkills.map((skill,index)=>(



<div

className="skill-card"

key={index}

>



<h2>

{skill.name}


<span className="skill-percent">

{skill.level}%

</span>


</h2>








<div className="progress">


<span

style={{
width:`${skill.level}%`
}}

></span>


</div>








<div className="skill-buttons">



<button

className="edit"

onClick={()=>editSkill(index)}

>



</button>







<button

className="delete"

onClick={()=>deleteSkill(index)}

>



</button>




</div>





</div>



))


}



</div>






</div>


);


}


export default Skills;