const express = require("express");
const router = express.Router();



const BabiesRegisterModel = require("../models/babiesRegisterModel") //import model

router.get("/babiesRegister", (req, res)=> { //to run on the browser and display form on server file
    res.render("babiesRegister");  //from babiesRegister.pug
 });


//post route for form to database
 router.post("/babiesRegister", async(req, res)=> {
   try {  
      const child = new BabiesRegisterModel(req.body);
      console.log(child);
      await child.save();
      res.send('success registering a baby!');
       //to display on same page//res.redirect("/childRegister")

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering baby...", error );
   }
   
 });

 
 module.exports = router;