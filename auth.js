const express = require("express");
const router = express.Router();

const User = require("../models/User");


// Register API
router.post("/register", async (req,res)=>{

  try{

    const {name,email,password} = req.body;


    const existingUser = await User.findOne({email});


    if(existingUser){

      return res.status(400).json({
        message:"User already exists ❌"
      });

    }


    const newUser = new User({

      name,
      email,
      password

    });


    await newUser.save();


    res.json({

      message:"User Registered Successfully 🚀",

      user:{
        name,
        email
      }

    });


  }
  catch(error){

    console.log(error);

    res.status(500).json({
      message:"Server Error"
    });

  }

});




// Login API
router.post("/login", async(req,res)=>{

  try{

    const {email,password}=req.body;


    const user = await User.findOne({

      email,
      password

    });


    console.log("Login User:", user);



    if(!user){

      return res.status(400).json({

        message:"Invalid Email or Password ❌"

      });

    }



    res.json({

      message:"Login Successful ✅",

      user:{
        name:user.name,
        email:user.email
      }

    });


  }
  catch(error){

    console.log(error);

    res.status(500).json({

      message:"Server Error"

    });

  }

});



module.exports = router;