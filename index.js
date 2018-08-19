const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const chalk = require("chalk");
const keys = require("./config/keys");
const passport = require("passport");
const path = require("path");
// const cookieSession = require('cookie-session');
const cors = require("cors");
const morgan = require("morgan");

const connectionRoutes = require("./routes/connectionRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const messagingRoutes = require('./routes/messagingRoutes');

const app = express();

/* Mongoose connection to mLab */
mongoose.Promise = global.Promise;
mongoose
  .connect(
    keys.mLabURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to mLab DB"))
  .catch(err => console.log("Error connecting to mLab", err));

/* Express Middleware */
app.use(cors()); // Used for testing. Client is on another port to server.
app.use(morgan("tiny")); // Used for testing. Logs requests to the console.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Commenting out for now to test JWT only
/* app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		keys: [keys.cookieKey],
	})
); */

// == Passport == //
require("./services/passport");
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/connections", connectionRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/message", messagingRoutes);


//production routing to client build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serving on ${PORT}`);
});
