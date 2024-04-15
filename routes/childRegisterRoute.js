const express = require("express");
const router = express.Router();



const ChildRegisterModel = require("../models/childRegisterModel") //import model

router.get("/childRegister", (req, res)=> { //to run on the browser and display form on server file
    res.render("childRegister");  //from childRegister.pug
 });


//post route for form to database
 router.post("/childRegister", async(req, res)=> {
   try {  
      const child = new ChildRegisterModel(req.body);
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
