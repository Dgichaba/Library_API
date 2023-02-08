const express = require('express');
const model = require('./../models/library');

const router = express.Router();

router.get('/', function(req, res){
  res.send("Get a list of books");
});

// CRUD Operations
module.exports=router;