const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["end_user", "support_agent", "admin"],
    default: "end_user",
  },

  profileSettings: {
    notifications: { type: Boolean, default: true },
    theme: { type: String, enum: ["light", "dark"], default: "light" },
  },

  ticketsCreated: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
  }],

  ticketsAssigned: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
  }],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
