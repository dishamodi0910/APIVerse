const express=require("express");
const router=express.Router();
const UpdateProfileRequest=require("./requestModel/updateProfileRequest");
const UpdateImageRequest=require("./requestModel/updateImageRequest");
const UpdateProfileService=require("./service/updateProfileService");
const UpdateProfileTypeRequest=require("./requestModel/UpdateProfileTypeRequest");
router.post('/profile',async(req,res)=>{
    const updateProfileRequest=new UpdateProfileRequest(req.body);
    try {
        let response=await UpdateProfileService.updateProfile(updateProfileRequest);
        res.send(response);
    } catch (error) {
        res.json({ error: error.message });
    }
})
router.post('/image',async(req,res)=>{
    const updateImageRequest=new UpdateImageRequest(req.body);
    try {
        let response=await UpdateProfileService.updateImage(updateImageRequest);
        res.send(response);
    } catch (error) {
        res.json({ error: error.message });
    }
})

router.post('/profileType',async(req,res)=>{
    const updateProfileTypeRequest=new UpdateProfileTypeRequest(req.body);
    try {
        let response=await UpdateProfileService.updateProfileType(updateProfileTypeRequest);
        res.send(response);
    } catch (error) {
        res.json({ error: error.message });
    }
})

module.exports=router;