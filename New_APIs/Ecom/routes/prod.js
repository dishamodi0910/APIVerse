const router=require('express').Router();
const product = require('../models/product');
const { verifyToken, verifynauth, verifynadmin } = require('./verifytoken');

//create
router.post("/add",verifynadmin,async (req,res)=>{
    const newp=new product(req.body)
    try{
        const saved=await newp.save();
        res.status(200).json(saved)
    }catch(err){
        res.status(500).json(err);
    }
})

//updates
router.put("/upd/:id",verifynadmin,async (req,res)=>{
    try {
        const updated = await product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
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
router.delete("/del/:id",verifynadmin,async (req,res)=>{
    try{
        await product.findByIdAndDelete(req.params.id)
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
        const a=await product.findById(req.params.id)
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

//get all products

router.get("/",async(req,res)=>{
    const querynew=req.query.new
    const querycat=req.query.category
    try{
        let prod;
        if(querynew){
            prod=await product.find().sort({createdAt:-1}).limit(5)
        }else if(querycat){
            prod=await product.find({
                categories:{
                    $in:[querycat]
                }
            })
        }
        else{
            prod=await product.find();
        }
        if(!prod){
            res.status(405).json("Not found")
        }
        res.status(200).json(prod);
    }
    catch(err){
        res.status(500).json("sorry again")
    }
})


module.exports=router;