const express = require("express");
const router = express.Router();



const Childregister = require("../models/childRegisterModel") //import model

router.get("/childRegister", (req, res)=> {
    res.render("childRegister")
 });



 router.post("/childRegister", (req, res)=> {
    const child = new Childregister(req.body);
    console.log(child);
    child.save();
    res.send('success')
    //res.render("childRegister")
 });

 
 module.exports = router;
