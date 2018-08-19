const mongoose = require("mongoose");
const { Schema } = mongoose;
const connectRequest = require("./connectionRequest");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  firstName: { type: String, required: false, lowercase: true },
  lastName: { type: String, required: false, lowercase: true },
  username: {
    type: String,
    validate: {
      validator: username => username.length > 2,
      message: "username must be longer than 2 characters"
    },
    required: [true, "Username is required"],
    lowercase: true
  },
  userPhotoURL: { type: String, required: false },
  email: { type: String, required: false, lowercase: true },
  location: {
    city: { type: String, required: false, lowercase: true },
    state: { type: String, required: false, lowercase: true },
    countryCode: { type: String, required: false, lowercase: true }
  },
  isTechnical: { type: Boolean, required: true, default: false },
  profileInfo: {
    headline: { type: String, maxlength: 160 },
    currentRole: { type: String, maxlength: 100 },
    sectorExperience: [{ type: String }],
    lookingFor: { type: String }
  },
  pendingConnectionRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "ConnectionRequest" }],
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  blockedConnections: [{ type: Schema.Types.ObjectId, ref: "User" }],
  hiddenUsers: [{ type: Schema.Types.ObjectId, ref: "User" }], // Hidden Users is for other users that have blocked this user
  unreadMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }]
});

userSchema.plugin(passportLocalMongoose);
/* * This hashes and salts the user password */
/* 
  ? could use email instead of username for auth 
  ? - https://github.com/saintedlama/passport-local-mongoose#main-options 
*/

const User = mongoose.model("User", userSchema);

module.exports = User;

/* 
    * This will be the initial User model for each user profile.  In Mongoose, we use Schemas
    * to create Documents (MongoDB term) to add to our Collection.  In this case a 'Collection of Users.'
    * Most of the userSchema should be rather self-explanatory,
    * but do note the isTechnical is how we will denote a "Technical Founder" if true vs 
    * 'Non-Technical' if false.  userPhotoURL will ideally be provided via the user's profile from OAuth.
    *
    * Also note, the 'connections' will be an array of Users that maps to each unique ObjectID that 
    * MongoDB automatically creates upon each new model/Schema that is created.
    *
    * Line 30 is where most of Mongoose's magic happens, where we add it to the 
    * mongoose .model constructor, which will allow us to reference the User collection 
    * (via the module.exports = User statement)
    * throughout our Express server/ router where we can search/query the collection, create new
    * user models (create new Users), and manipulate the db as we need.
 */
