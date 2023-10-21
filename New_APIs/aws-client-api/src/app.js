const {uploadMediaToS3 } = require("./aws-config");
const conn = require("./dbconn/conn");
conn();
const AWS_DOC =require("./dbconn/mongostash");

require("dotenv").config()
const express = require("express");
const app = express();
app.use(require('body-parser').urlencoded({extended:true}))
const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(express.json())
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/interface.html")
})

app.post("/load/file",upload.single('mmf'),async (req,res)=>{
    try{
        const {file_id} = req.body;
        console.log(req.file)
        console.log(file_id)
        const hash = await uploadMediaToS3(req.file);
        console.log("Hash::",hash);
        const newDoc = new AWS_DOC({
            file_id,
            hash,
          });
        const finalDoc = await newDoc.save();
        console.log(finalDoc);
        res.redirect("/")
    }catch(e) {
        console.log('Error:',e.message);
    }
})

app.listen(process.env.PORT,()=>{
    console.log(`App live @${process.env.PORT}`);
})