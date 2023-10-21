
const mongoose = require("mongoose");

const AWS_DOC = mongoose.model('AWS_DOC', new mongoose.Schema({
    file_id:{
        type:String,
        required:true
    },
    hash:{
        type:String,
        required:true
    }
}));

module.exports = AWS_DOC;


