const express = require('express');
const router = express.Router();
/**
 * Import the ppConfig.js file inside of auth.js located in the controllers folder
 */
const passport = require('../config/ppConfig');

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

// this route posts to /auth/login in login.ejs
router.post('/login', passport.authenticate('local', {  //telling passport.auth to use the local authentication type
  successRedirect: '/',
  failureRedirect: '/auth/login',
  successFlash: 'Welcome back ...',
  failureFlash: 'Either email or password is incorrect' 
}));

module.exports = router;