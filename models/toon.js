const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toonSchema = new Schema({
  className: { type: String,  required: true},
  ascension: {type: String,  required: true},
  attribute: {type: String,  required: true},
  starteritems: {type: String,  required: true},
  category: {type: String,  required: true},
  weapontype: {type: String,  required: true},
  armortype: {type: String,  required: true},
  offhandtype: {type: String,  required: true},
  itemclassName: {type: String,  required: true}
  
  
});

const usersSchema = new Schema({
  username: {type: String, required:true},
  password: {type: String, required:true}
});

const Toon = mongoose.model("Toon", toonSchema);
const Users = mongoose.model("User", usersSchema);

module.exports = (Toon, Users);