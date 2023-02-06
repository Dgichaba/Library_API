// Import express framework
const express = require('express');
const mongoose = require('mongoose');

// Initialize express
const app = express();

//let indexRouter = require('./routes/index');

// Connecting to the Database
let mongodb_url = 'mongodb://localhost/';
let dbName = 'LibraryDatabase';
mongoose.connect(mongodb_url + dbName,)
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
   console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
   console.log(error);
})

// Define the port number
const PORT = 5000;


app.listen(PORT, function(){
   console.log(`Server is listening on port ${PORT}`)
})