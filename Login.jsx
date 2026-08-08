import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";


function Login(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  const handleLogin = async(e)=>{

    e.preventDefault();


    if(!email || !password){

      alert("Please fill all fields");
      return;

    }


    try{

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({
            email,
            password
          })
        }
      );



      const data = await response.json();


      console.log("Login Response:",data);



      if(response.ok){

        alert("Login Successful ✅");

        navigate("/dashboard");

      }
      else{

        alert(data.message);

      }


    }
    catch(error){

      console.log("Login Error:",error);

      alert("Backend server connect agta illa");

    }


  };



  return(

    <div className="login-page">


      <div className="login-card">


        <h1>
          Welcome Back 👋
        </h1>


        <p>
          Login to your CodeFolio account
        </p>



        <form onSubmit={handleLogin}>


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

            Login

          </button>



        </form>



        <p className="register-link">

          Don't have an account?{" "}

          <Link to="/register">

            Register

          </Link>

        </p>



      </div>


    </div>

  );

}


export default Login;