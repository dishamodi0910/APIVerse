const express=require("express");
const router=express.Router();
// const { bcrypt } = require('bcrypt');
const RegistractionRequest=require("./requestModel/registractionRequest");
const RegistrationService=require("./service/registrationService");

router.post('/createUser',async(req,res)=>{
    const registractionRequest=new RegistractionRequest(req.body);
    try {
        let registrationResponse=await RegistrationService.createUser(registractionRequest);
        res.send(registrationResponse);
    } catch (error) {
        res.json({ error: error.message });
    }
})

module.exports=router;


