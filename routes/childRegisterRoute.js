const express = require("express");
const router = express.Router();



const childRegister = require("../models/childRegisterModel") //import model

router.get("/childRegister", (req, res)=> {
    res.render("childRegister")
 });

 router.post("/childRegister", (req, res)=> {
    const child = new childRegister(req.body);
    console.log(child);
    child.save();
    //res.render("childRegister")
 });

 module.exports = router;
