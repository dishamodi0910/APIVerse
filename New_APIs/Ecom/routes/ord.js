const router=require('express').Router();
const order = require('../models/cart');
const { verifyToken, verifynauth, verifynadmin } = require('./verifytoken');

//create

router.post("/add",verifyToken,async (req,res)=>{
    const newo=new order(req.body)
    try{
        const saved=await newo.save();
        res.status(200).json(saved)
    }catch(err){
        res.status(500).json(err);
    }
})

//updates

router.put("/upd/:id",verifynadmin,async (req,res)=>{
    try {
        const updated = await order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
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
        await order.findByIdAndDelete(req.params.id)
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
        const a=await order.findOne({userId:req.params.id})
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

        const orders=await order.find()
        res.statusMessage(200).json(orders)

    }catch(err){
        res.status(500).json(err)
    }

})

//get monthly income

router.get("/income",verifynadmin,async (req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await order.aggregate([
            { $match: { createdAt: { $gte: prevMonth, $lt: lastMonth } } }, 
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: null, 
                    totalSales: { $sum: "$sales" } 
                }
            }
        ]);

        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports=router;