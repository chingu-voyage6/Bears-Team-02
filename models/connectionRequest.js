const mongoose = require("mongoose");
const { Schema } = mongoose;

const ConnectionRequestSchema = new Schema({
  requestingUser: { type: Schema.Types.ObjectId, ref: "User", index: true }, // User that is making the connection request
  requestedUser: { type: Schema.Types.ObjectId, ref: "User", index: true }, // User that is being requested to connect
  pending: { type: String, default: 'Pending' } // Pending, Accepted, Rejected
});

const ConnectionRequest = mongoose.model('ConnectionRequest', ConnectionRequestSchema)
 
module.exports.create = (newConnectionRequest, callback) => {
  newConnectionRequest.save(callback)
}