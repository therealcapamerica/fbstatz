import { Schema as _Schema } from 'mongoose';
const Schema = _Schema;

var confSchema = new Schema({
  ConferceCode:  String, 
  Name: String,
  Subdivision:   String
  }
)

export default confSchema;
