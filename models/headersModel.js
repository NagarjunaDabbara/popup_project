const mongoose = require("mongoose");

const headersSchema = new mongoose.Schema({
  enterName: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  headerDetails: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Domain", headersSchema);
