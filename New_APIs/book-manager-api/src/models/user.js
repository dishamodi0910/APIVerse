const mongoose = require('mongoose')
const validator = require('validator')
const Book = require('./book')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        trim : true,
        lowercase : true,
        validate (value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!')
            }
        }
    },
    password : {
        type : String,
        required : true,
        validate(value) {
            if (value.length < 7) {
                throw new Error('Password should be atleast 7 characters long!')
            }
        }
    },
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }]
})

//preventing password and token to get displayed in browser
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

//creating a 'books' field
userSchema.virtual('books', {
    //we are setting 'owner' field as foreign key which takes reference from primary key of user model, i.e, user id
    ref : 'Book',
    localField : '_id', 
    foreignField : 'owner'
})

//creating token 
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id : user._id.toString()}, process.env.JWT_SECRET_KEY)

    user.tokens = user.tokens.concat( {token})
    await user.save()

    return token
}

//user can login only with their credentials
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne( {email})
    if (!user){
        throw new Error('Unable to login!')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch){
        throw new Error('Unable to login!')
    }
    return user
}

//hashing password before saving user data in database
userSchema.pre('save', async function (next){
    const user = this

    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    
    //it is used just to tell the compiler that our above task is fulfilled, otherwise the function will hang (waiting infinitely)
    next()
})

//deleting user books when user is removed
userSchema.pre('deleteOne', { document : true }, async function (next){
    const user = this
    await Book.deleteMany( {owner : user._id})

    next()
})


const User = mongoose.model('User', userSchema)
module.exports = User