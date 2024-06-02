
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv"

dotenv.config();

export default class AuthController {
    static async registerUser(req, res, next) {
        const { name, username, password } = req.body;
        try {
            const userExists = await User.findOne({username});
            console.log(userExists);
            if(userExists){
                return(res.status(400).json({message: "User with username already exists"}));
            }
            const user = new User({ name, username, password});
            const newUser = await user.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '4d' });
            res.status(201).json({ jwt: token });
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: err });
        }
    }
    static async loginUser(req, res, next) {
        const { username, password } = req.body;
        try {
            const user = await User.authenticateUser(username, password);
            if (user) {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '4d' });
                res.status(201).json({ jwt: token });
            }
            else {
                return (res.status(401).json({ message: "Invalid credentials" }));
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
}
