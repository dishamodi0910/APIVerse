const express=require('express')
const app=express()
require('dotenv').config()
const mongoose=require('mongoose')
const products=require('./mongodb/shopping')
const cors=require('cors')
app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{res.send({
    author:"sivaprasath2004",
    category:["mobile","laptop","toys","fashion","furniture"],
    Routes:{
        all_product:"/products",
        category:"/products/category/:category",
        specidic_product:"/products/product/:id"
    }
})})
app.get("/products",async(req,res)=>{ 
    await mongoose.connect(process.env.DB)
    try{
    let product=await products.find()
    res.send(product) 
    throw new Error('Something went wrong!');
}catch(err){
  res.send(err)
}
})
app.get("/products/category/:category",async(req,res)=>{
    await mongoose.connect(process.env.DB)
    try{
    let product=await products.find({category:req.params.category})
    res.send(product) 
    throw new Error('Something went wrong!');
}catch(err){
  res.send(err)
}
}) 
app.get("/products/product/:id",async(req,res,next)=>{
    await mongoose.connect(process.env.DB)
    try{
    let product=await products.findById(req.params.id)
    if(product){
    res.send(product) 
    }else{res.send("Sorry no more products available")}
    throw new Error('Something went wrong!');
}catch(err){
  res.send(err)
}
}) 
app.listen(5000,()=>{console.log("app listen in 5000")})