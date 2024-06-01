const express=require("express");
const router=express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '51633212421-krsih18kajc1vmupn459tkervor2hfef.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8080/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if user already exists in the database
        const [rows, fields] = await pool.execute('SELECT * FROM user_details WHERE google_id = ?', [profile.id]);
        if (rows.length > 0) {
            // User already exists, return user data
            return done(null, rows[0]);
        } else {
            // User doesn't exist, create a new user
            const newUser = {
                google_id: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value
                // Add any additional user data you want to save
            };
            const [result, _] = await pool.execute('INSERT INTO user_details SET ?', [newUser]);
            newUser.id = result.insertId;
            return done(null, newUser);
        }
    } catch (error) {
        return done(error);
    }
}));

// Initialize passport
router.use(passport.initialize());

// Route for initiating Google OAuth authentication
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Route for handling Google OAuth callback
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect to home page or user dashboard
        res.redirect('/');
    }
);

module.exports=router;