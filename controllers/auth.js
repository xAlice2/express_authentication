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

module.exports = router;