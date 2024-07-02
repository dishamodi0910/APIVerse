const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description : {
        type : String,
        trim : true,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User' //ref is used for referring a model to another model, this basically connects task and user model we created
    }
})

const Task = mongoose.model('Tasks', taskSchema)
module.exports = Task