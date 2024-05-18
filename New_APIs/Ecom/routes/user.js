const router=require('express').Router();
const user = require('../models/user');
const auth=require('./auth');
const { verifyToken, verifynauth, verifynadmin } = require('./verifytoken');

router.put("/:id",verifynauth,async (req,res)=>{
    if(req.body.password){
        req.body.password=crypto.AES.encrypt(req.body.password,process.env.secretphrase).toString()
    }
    try {
        const updated = await user.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updated) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
    }
)

//delete

router.delete("/:id",verifynauth,async(req,res)=>{
    try{
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get

router.get("/find/:id",verifynadmin,async(req,res)=>{
    try{
        console.log(req.params.id)
        const a=await user.findById(req.params.id)
        console.log(a)
        if(!a){
            res.status(405).json("Not found")
        }
        console.log(user._doc)
        const { password, ...others } = a._doc;
        res.status(200).json({others});
    }
    catch(err){
        res.status(500).json("sorry again")
    }
})

//get all users

router.get("/",verifynadmin,async(req,res)=>{
    const query=req.query.new
    try{
        console.log(req.params.id)
        const a=query ? await user.find().sort({_id:-1}).limit(5) :await user.find();
        console.log(a)
        if(!a){
            res.status(405).json("Not found")
        }
        res.status(200).json(a);
    }
    catch(err){
        res.status(500).json("sorry again")
    }
})

//get user stats

router.get("/stats",verifynadmin,async (req,res)=>{
    const date=new Date();
    const lyear=new Date(date.setFullYear(date.getFullYear()-1)) //last year today
    try{
        const data=await user.aggregate([
            {$match:{createdAt:{$gte: lyear}}},
            {
                $project:{
                    month:{
                        $month:{$toDate:"$createdAt"}
                    }
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1},
                }
            }
        ])
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports=router;