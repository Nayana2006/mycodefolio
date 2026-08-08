require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();


// Auth Route Import
const authRoutes = require("./routes/auth");


// Middleware
app.use(cors());

app.use(express.json());



// MongoDB Connection

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

  console.log("MongoDB Connected ✅");

})

.catch((error)=>{

  console.log("MongoDB Error:", error);

});




// Auth API

app.use("/api/auth", authRoutes);




// Home Route

app.get("/", (req, res) => {

  res.send("CodeFolio Backend is Running 🚀");

});





// Portfolio Route

app.get("/api/portfolio", (req, res) => {

  res.json({

    name: "Nayana Nagraj",

    role: "Frontend Developer",

    bio: "Passionate Frontend Developer",


    skills: [

      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB"

    ],



    projects: [

      {

        title: "CodeFolio",

        description: "Portfolio Builder using React"

      },


      {

        title: "Weather App",

        description: "Weather Forecast Application"

      },


      {

        title: "To-Do App",

        description: "Task Management Application"

      },


      {

        title: "Calculator",

        description: "Simple Calculator"

      }


    ]


  });


});






const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(`🚀 Server running on http://localhost:${PORT}`);

});