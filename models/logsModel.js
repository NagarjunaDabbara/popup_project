const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    default: false,
  },
  campaign: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Logs", logsSchema);
