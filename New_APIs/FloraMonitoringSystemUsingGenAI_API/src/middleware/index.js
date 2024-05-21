import jwt from 'jsonwebtoken';
import User from '../mongodb/models/user.js';
import multer from "multer";


export const isLoggedIn = async (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Please login to access resource',
    });
  }
  try {
    const userId = jwt.verify(token, process.env.AUTH_SECRET);
    const user = await User.findById(userId.id);
    req.user = user;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token',
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};


export const isOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.header('Authorization'); 
    const decodedToken = jwt.verify(token, process.env.AUTH_SECRET);
    const currentUserId = decodedToken._id;
    

    if (!id|| !currentUserId) {
      return res.status(400).json({
        success: false,
        message: 'User not authenticated',
      });
    }

    if (currentUserId.toString() !== id) {
      return res.status(403).json({
        success: false,
        message: 'User not authorized',
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: 'Server error',
    });
  }
};




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})