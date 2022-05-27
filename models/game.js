const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  note: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Game", dataSchema);
