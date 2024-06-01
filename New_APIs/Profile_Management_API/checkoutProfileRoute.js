const express=require("express");
const router=express.Router();
const CheckoutProfileService=require("./service/checkoutProfileService");
const UserProfileListResponse=require("./responseModel/userProfileListResponse");

router.post('/profile',async(req,res)=>{
    console.log(req.query);
    const userId = req.query.id;
    console.log(userId);
    try {
        let checkoutProfileResponse=await CheckoutProfileService.checkoutProfile(userId);
        res.send(checkoutProfileResponse);
    } catch (error) {
        res.json({ error: error.message });
    }
})

router.post('/userProfilesList',async(req,res)=>{
    console.log(req.query);
    const userId = req.query.id;
    console.log(userId);
    try {
        let userProfileListResponse=await CheckoutProfileService.userProfileListData(userId);
        res.send(userProfileListResponse);
    } catch (error) {
        res.json({ error: error.message });
    }
})

module.exports=router;