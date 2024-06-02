import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    following: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] },
    followers: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.authenticateUser = async function (username, password) {
    const userFound = await this.findOne({ username: username });
    if (!userFound) {
        return (null);
    }
    const isMatching = await bcrypt.compare(password, userFound.password);
    if (isMatching)
        return (userFound);
    return (null);
}


const User = mongoose.model('User', userSchema);
export default User;