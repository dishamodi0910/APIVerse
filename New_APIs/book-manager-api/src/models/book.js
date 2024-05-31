const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        trim : true,
        required : true,
    },
    author_name : {
        type : String,
        trim : true,
        required : true
    },
    genre : {
        type : String,
        trim : true,
        required : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

const Book = mongoose.model('Books', bookSchema)
module.exports = Book