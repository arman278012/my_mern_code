const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  thumbnail:String,
  createdAt: { type: Date, default: new Date() }, 
});

const myModel = mongoose.model("products", mySchema);

module.exports = myModel;