const express=require('express');
const app=express();
const dotenv=require('dotenv')
dotenv.config();
const mongoose=require('mongoose')
const userRoute=require('./routes/user')
const authRoute=require('./routes/auth')
const prodRoute=require('./routes/prod')
const carRoute=require('./routes/car')
const orderRoute=require('./routes/ord')



mongoose.connect(process.env.url
).then(()=>{
    console.log("Db connection successfull"
    )
}).catch((err)=>{
    console.log(err);
})


//middlewares

app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/prod",prodRoute)
app.use("/api/car",carRoute)
app.use("/api/ord",orderRoute)


app.listen(process.env.Port,()=>{
    console.log("server running");
})
