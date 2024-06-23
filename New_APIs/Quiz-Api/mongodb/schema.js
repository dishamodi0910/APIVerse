const mongoose=require('mongoose') 
const Quiz=new mongoose.Schema({
        "id": Number,
        "category": String,
        "question": String,
        "options": [String],
        "answer": String
}) 
module.exports=mongoose.model("quiz",Quiz)