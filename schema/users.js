
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fristname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("Usernormal", userSchema);

module.exports = User;