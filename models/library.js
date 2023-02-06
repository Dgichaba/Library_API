const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for our database
var LibrarySchema = new Schema({
    Book_name: String,
    Category: String,
    Author: String,
    date: {type: Date, default: Date() }

});

// convert the schema into a Model
let Books = mongoose.model("Books", LibrarySchema);

module.exports = Books;