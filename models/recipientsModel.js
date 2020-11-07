const mongoose = require("mongoose");

const recipientSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
        type: String,
        required: true,
    },
    
  });
  module.exports = mongoose.model("Recipients", recipientSchema);