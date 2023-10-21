const { UploadPicturesToS3 } = require("./aws-config");
const conn = require("./dbconn/conn");
conn();
require("dotenv").config()
const express = require("express");
const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/load/file",upload.single('mmf'),async (req,res)=>{
    try{
        const obj = await UploadPicturesToS3(req.file);
    }catch(e) {
        console.log('Error:',e.message);
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`App live @${process.env.PORT}`);
})