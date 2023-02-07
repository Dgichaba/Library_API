const express = require("express");
const mongoose = require('mongoose');
const library= require ("../models/library");
const router = express.Router();

// Get API endpoint
router.get('/', async function (req,res) {
    res.send("Welcome to Group number 2");
});

module.exports = router;