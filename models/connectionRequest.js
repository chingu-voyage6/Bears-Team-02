const mongoose = require("mongoose");
const { Schema } = mongoose;

const connectRequestSchema = new Schema({
  requestingUser: { type: Schema.Types.ObjectId, ref: "User" },
  pending: { type: Boolean, default: false }
});

module.exports = connectRequestSchema;
