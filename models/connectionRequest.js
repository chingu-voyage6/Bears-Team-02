const mongoose = require("mongoose");
const { Schema } = mongoose;

const connectRequestSchema = new Schema({
  requestingUser: { type: Schema.Types.ObjectId, ref: "User" }, // User that is making the connection request
  requestedUser: { type: Schema.Types.ObjectId, ref: "User" }, // User that is being requested to connect
  pending: { type: Boolean, default: true }
});

module.exports = connectRequestSchema;
