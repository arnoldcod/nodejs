const express = require("express");
const router = express.Router();



const ChildRegisterModel = require("../models/childRegisterModel") //import model

router.get("/childRegister", (req, res)=> { //to run on the browser and display form on server file
    res.render("childRegister");  //from childRegister.pug
 });



 router.post("/childRegister", (req, res)=> {
    const child = new ChildRegisterModel(req.body);
    console.log(child);
    child.save();
    res.send('success!');
 });

 
 module.exports = router;
