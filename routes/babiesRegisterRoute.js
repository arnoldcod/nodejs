const express = require("express");
const router = express.Router();



const BabiesRegisterModel = require("../models/babiesRegisterModel") //import model

router.get("/babies", (req, res)=> { //to run on the browser and display form on server file
    res.render("babiesRegister");  //from babiesRegister.pug
 });


//post route for form to database
 router.post("/babiesRegister", async(req, res)=> {
   try {  
      const child = new BabiesRegisterModel(req.body);
      console.log(child);
      await child.save();
      // res.redirect("/babiesRegister");
      res.send('success registering a baby!');
       //to display on same page//res.redirect("/childRegister")

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering baby...", error );
   }
   
 });

 //fetching babies from database 
 router.get("/babies", async (req, res)=> {
   try {
     let babies = await BabiesRegisterModel.find()
     res.render("renderBabies", {babies:babies}) // to display babies from data base

   } catch (error) {
      res.status(400).send("unable to find sitters from database!");
      console.log("unable to find babies from database!...", error );
   }

   })


//delete route for form in database
 router.post("/delete", async(req, res)=> {
   try {  
      await BabiesRegisterModel.deleteOne({_id:req.body.id});
      
      res.redirect("back");
      // res.send('success registering a baby!');
       //to display on same page//res.redirect("/childRegister")

   } catch (error) {
      res.status(400).send("unable to delete baby from db!");
      console.log("error deleting baby...", error );
   }
   
 });

 
 module.exports = router;