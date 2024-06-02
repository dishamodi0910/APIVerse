import { response } from "express";
import User from "../models/user.js";

export default class UserController {


    static async getUserProfile(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await User.findById(userId);
            if (!user) {
                return (res.status(404).json({ message: "User not found" }));
            }
            res.status(200).json({ username: user.username, name: user.name });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async updateUserProfile(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await User.findById(userId);
            if (!user) {
                return (res.status(404).json({ message: "User not found" }));
            }
            if (!user._id.equals(req.user._id)) {
                return (res.status(401).json({ message: "Unauthorized" }));
            }
            const { username, name } = req.body;
            if (username) user.username = username;
            if (name) user.name = name;
            const updatedUser = await user.save();
            res.status(200).json({ username: updatedUser.username, name: updatedUser.name });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async deleteUserProfile(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await User.findById(userId);
            if (!user) {
                return (res.status(404).json({ message: "User not found" }));
            }
            if (!user._id.equals(req.user._id)) {
                return (res.status(401).json({ message: "Unauthorized" }));
            }
            await User.findByIdAndDelete(userId);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async getUserFollowing(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await User.findById(userId).populate("following");
            if (!user) {
                return (res.status(404).json({ message: "User not found" }));
            }
            if (!user._id.equals(req.user._id) && !user.followers.some(u => u._id.equals(req.user._id))) {
                return (res.status(401).json({ message: "Unauthorized" }));
            }
            console.log(user);
            const following = user.following;
            const response = following.map((user) => {
                const { _id, username, name } = user;
                return ({ _id, username, name });
            })
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }
    static async followUser(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await User.findById(userId);
            console.log(user);
            if (!user || user._id.equals(req.user._id)) {
                return res.status(404).json({ message: "User not found" })
            }
            if (req.user.following.includes(user._id)) {
                return res.status(401).json({ message: "Already following user" })
            }
            req.user.following.push(user._id);
            user.followers.push(req.user._id);
            await user.save();
            await req.user.save();
            res.status(200).json({ message: "Added following successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async unfollowUser(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await User.findById(userId);
            console.log(user);
            if (!user || user._id.equals(req.user._id)) {
                return res.status(404).json({ message: "User not found" })
            }
            if (!req.user.following.includes(user._id)) {
                return res.status(401).json({ message: "Not following user" })
            }
            req.user.following = req.user.following.filter((uid)=>{
                if(user._id.equals(uid)){
                    return(false);
                }
                return(true);
            })
            user.followers = user.followers.filter((uid)=>{
                if(req.user._id.equals(uid)){
                    return(false);
                }
                return(true);
            })
            await user.save();
            await req.user.save();
            res.status(200).json({ message: "Removed following successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }

    static async getUserFollowers(req, res, next) {

        try {
            const { userId } = req.params;
            const user = await User.findById(userId).populate("followers");
            if (!user) {
                return (res.status(404).json({ message: "User not found" }));
            }
            
            console.log(user.followers);
            if (!user._id.equals(req.user._id) && !user.followers.some(u => u._id.equals(req.user._id))) {
                return (res.status(401).json({ message: "Unauthorized" }));
            }
            const followers = user.followers;
            const response = followers.map((user) => {
                const { _id, username, name } = user;
                return ({ _id, username, name });
            })
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    }



}