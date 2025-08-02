const ticketSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["Open", "In Progress", "Resolved", "Closed"],
    default: "Open",
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Support agent
  },

  updates: [
    {
      message: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  attachments: [String], // File URLs

  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);
