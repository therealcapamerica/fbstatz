const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var confSchema = new Schema({
  ConferceCode:  String, 
  Name: String,
  Subdivision:   String
  }
)

module.exports = confSchema;
