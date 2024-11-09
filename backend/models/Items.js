const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
