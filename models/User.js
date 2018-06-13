const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    countryCode: { type: String, required: true }
  },
  isTechnical: { type: Boolean, required: true },
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;

 
/* 
    * This will be the initial User model for each user profile.  In Mongoose, we use Schemas
    * to create Documents (MongoDB term) to add to our Collection.  In this case a 'Collection of Users.'
    * Most of the userSchema should be rather self-explanatory,
    * but do note the isTechnical is how we will denote a "Technical Founder" if true vs 
    * 'Non-Technical' if false.  
    *
    * Also note, the 'connections' will be an array of Users that maps to each unique ObjectID that 
    * MongoDB automatically creates upon each new model/Schema that is created.
    *
    * Line 18 is where most of Mongoose's magic happens, where we add it to the 
    * mongoose .model constructor, which will allow us to reference the User collection 
    * (via the module.exports = User statement)
    * throughout our Express server/ router where we can search/query the collection, create new
    * user models (create new Users), and manipulate the db as we need.
 
 */