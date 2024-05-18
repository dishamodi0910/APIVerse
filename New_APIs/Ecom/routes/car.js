const router=require('express').Router();
const cart = require('../models/cart');
const { verifyToken, verifynauth, verifynadmin } = require('./verifytoken');

//create

router.post("/add",verifyToken,async (req,res)=>{
    const newc=new cart(req.body)
    try{
        const saved=await newc.save();
        res.status(200).json(saved)
    }catch(err){
        res.status(500).json(err);
    }
})

//updates

router.put("/upd/:id",verifyToken,async (req,res)=>{
    try {
        const updated = await cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updated) {
            return res.status(404).json({ error: "product not found" });
        }
        res.status(200).json(updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
    }
)


//delete
router.delete("/del/:id",verifyToken,async (req,res)=>{
    try{
        await cart.findByIdAndDelete(req.params.id)
        res.status(200).json("product has been deleted")
    }
    catch(err){
        res.status(500).json(err)
    }}
)

//get products

router.get("/find/:id",async(req,res)=>{
    try{
        console.log(req.params.id)
        const a=await cart.findOne({userId:req.params.id})
        console.log(a)
        if(!a){
            res.status(405).json("Not found")
        }
        console.log(a._doc)
        const { password, ...others } = a._doc;
        res.status(200).json({others});
    }
    catch(err){
        res.status(500).json("sorry again")
    }
})

//get all prod

router.get("/",verifynadmin,async(req,res)=>{
    try{

        const cart=await cart.find()
        res.statusMessage(200).json(cart)

    }catch(err){
        res.status(500).json(err)
    }

})


module.exports=router;