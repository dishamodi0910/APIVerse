const express=require("express");
const router=express.Router();
const LoginRequest=require("./requestModel/loginRequest");
const LoginService=require("./service/loginService");

router.post('/user',async(req,res)=>{
    const loginRequest=new LoginRequest(req.body);
    try {
        let loginResponse=await LoginService.loginUser(loginRequest);
        res.send(loginResponse);
    } catch (error) {
        res.json({ error: error.message });
    }
})



module.exports=router;