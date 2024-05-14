import { z } from 'zod';
import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import { fromError } from 'zod-validation-error';
import { errorHandler } from '../utils/errorhandler.js';
import jwt from 'jsonwebtoken';

// zod schema for registration
const regSchema = z.object({
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(6),
});

/**
 * @REGISTRATION
 * @ROUTE @POST {{url}}/api/auth/registration
 * @access PUBLIC
 */

export const registration = async (req, res, next) => {
  try {
    const validatedData = regSchema.parse(req.body);

    const { username, email, password } = validatedData;

    const hashedPassword = bcrypt.hashSync(password, 10);

    // create the user
    const newUser = new User({ username, email, password: hashedPassword });
    console.log(newUser);
    // save the user
    await newUser.save();

    res.status(200).json({
      success: true,
      message: 'user created successfully',
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const validationError = fromError(err);
      return next(errorHandler(400, validationError.toString()));
    } else {
      return next(err);
    }
  }
};

const loginSchema = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(6),
});

/**
 * @LOGIN
 * @ROUTE @POST {{url}}/api/auth/login
 * @access PUBLIC
 */

export const login = async (req, res, next) => {
  try {
    const { username, password } = loginSchema.parse(req.body);

    // Find user by username
    const validUser = await User.findOne({ username });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }
    // Compare passwords
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, 'Wrong Credentials'));
    }
    // Generate JWT token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    // Omit password field from response
    const { password: pass, ...userData } = validUser._doc;

    // Set JWT token in cookie and send user data in response
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ token, userData, message: 'user logged in successfully' });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const validationError = fromError(err);
      return next(errorHandler(400, validationError.toString()));
    } else {
      return next(err);
    }
  }
};

const emailSchema = z.object({
  email: z.string().email(),
});

/**
 * @FORGOT_PASSWORD
 * @ROUTE @POST {{URL}}/api/auth/forgot-password
 * @ACCESS Public
 */

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = emailSchema.parse(req.body);

    const user = await User.findOne({ email });

    if (!user) {
      return next(new errorHandler(400, 'user not registered'));
    }

    // Generating the reset token
    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Save token and its expiration time in the user document
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    res.status(200).json({ resetToken });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const validationError = fromError(err);
      return next(errorHandler(400, validationError.toString()));
    } else {
      return next(err);
    }
  }
};

// Define a Zod schema for the reset-password request body
const ResetPasswordSchema = z.object({
  token: z.string(),
  newPassword: z.string().min(6),
});

/**
 * @RESET_PASSWORD
 * @ROUTE @POST {{URL}}/api/auth/reset-password
 * @ACCESS Public
 */

export const resetPassword = async (req, res, next) => {
  try {
    const { token, newPassword } = ResetPasswordSchema.parse(req.body);

    // Verify and decode the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by decoded user ID
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return next(errorHandler(401, 'Invalid or expired token'));
    }

    // Check if token is expired
    if (Date.now() > user.resetPasswordExpires) {
      return next(errorHandler(401, 'Token expired'));
    }

    // Update user's password
    user.password = bcrypt.hashSync(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const validationError = fromError(err);
      return next(errorHandler(400, validationError.toString()));
    } else {
      return next(err);
    }
  }
};
