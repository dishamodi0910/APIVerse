const express=require('express');
const app=express();
const bodyParse = require("body-parser");
const pool =require("./db");
const PORT=8080;
const path = require("path");
// const { bcrypt } = require('bcrypt');
const registrationRoute=require("./registrationRoute");
const loginRoute=require("./loginRoute");
const checkoutProfileRoute=require("./checkoutProfileRoute");
const updateProfileRoute=require("./updateProfileRoute");
const googleAuthRoute=require("./googleAuthRoute");
const passport = require('passport');
// const userRoute = require("./routes/userRoute");
// app.use(cors());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
// app.use("/user", userRoute);

app.listen(PORT,()=>console.log(`it's alive on http://localhost:${PORT}`))
app.use("/register",registrationRoute);
app.use("/login",loginRoute);
app.use("/checkout",checkoutProfileRoute);
app.use("/update",updateProfileRoute);
app.use("/gglAuth",googleAuthRoute);

