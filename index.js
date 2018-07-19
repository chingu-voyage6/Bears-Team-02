const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const chalk = require('chalk');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cors = require('cors');
const morgan = require('morgan');

const indexRoutes = require('./routes/index');
const founderRoutes = require('./routes/founderRoute');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

/* Mongoose connection to mLab */
mongoose.Promise = global.Promise;
mongoose
	.connect(
		keys.mLabURI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('Connected to mLab DB'))
	.catch(err => console.log('Error connecting to mLab', err));

/* Express Middleware */
app.use(cors()); // Used for testing. Client is on another port to server.
app.use(morgan('tiny')); // Used for testing. Logs requests to the console.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());
require('./services/passport');

// app.set("view engine", "ejs"); //temp

/* Routes */
app.use('/', indexRoutes);
app.use('/founders', founderRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Serving on ${PORT}`);
});
