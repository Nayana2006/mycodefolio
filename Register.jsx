import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";


function Register(){

const navigate = useNavigate();


const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");



const handleRegister = async(e)=>{

e.preventDefault();



if(!name || !email || !password){

alert("Please fill all fields");
return;

}



try{


const response = await fetch(
"http://localhost:5000/api/auth/register",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},


body:JSON.stringify({

name,
email,
password

})


}

);



const data = await response.json();



alert(data.message);



navigate("/login");



}

catch(error){

console.log(error);

alert("Server Error");

}


};





return(


<div className="login-page">


<div className="login-card">


<h1>
Create Account 🚀
</h1>


<p>
Join CodeFolio
</p>




<form onSubmit={handleRegister}>


<input

type="text"

placeholder="Enter Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>



<input

type="email"

placeholder="Enter Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>




<input

type="password"

placeholder="Enter Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>





<button type="submit">

Register

</button>



</form>



<p className="register-link">

Already have an account?{" "}

<Link to="/login">

Login

</Link>


</p>



</div>


</div>


);


}


export default Register;