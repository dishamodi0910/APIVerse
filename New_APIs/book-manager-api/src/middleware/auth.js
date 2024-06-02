const jwt = require('jsonwebtoken')
const User = require('../models/user')

//we are verifying the auth token provided by the user so that a user can alter only their data and can't see others'
const auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await User.findOne({ _id : decoded._id, 'tokens.token' : token})

        if (!user){
            throw new Error()
        }
        req.token = token
        req.user = user
        next()

    }catch(e){
        res.status(401).send({ 'error' : 'Please authenticate'})
    }
}

module.exports = auth