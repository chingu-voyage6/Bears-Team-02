const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { isLoggedIn } = require('../middleware/helper');
const jwt = require('jwt-simple');

const userToken = user => {
	const timeStamp = new Date().getTime();
	return jwt.encode({ sub: user, iat: timeStamp }, 'secret');
};

const requireAuth = passport.authenticate('jwt', { session: false });

/* 
  * TEMP Routing
*/
router.get('/register', (req, res) => {
	res.render('register');
});

router.get('/login', (req, res) => {
	res.render('login');
});

router.get('/secret', isLoggedIn, (req, res) => {
	res.render('secret');
});

// == Register == //
router.post('/register', (req, res) => {
	const { firstName, lastName, username, email, password } = req.body;
	const isTechnical = req.body.isTechnical ? true : false;

	const newUser = {
		firstName,
		lastName,
		username,
		email,
		isTechnical,
	};

	User.register(newUser, password, (err, user) => {
		if (err) {
			console.log('authRoutes[User.register] - err', err);
			return res.status(400).send(err);
		}
		passport.authenticate('local')(req, res, () => {
			console.log('authRoutes[passport.authenticate] - req.user', req.user);
			const { _id, firstName, lastName, username, email, connections } = req.user;
			const foundUser = { _id, firstName, lastName, username, email, connections };
			return res.status(200).send({
				user: foundUser,
				msg: 'User successfully created',
				token: userToken(user),
			});
		});
	});
});

// == Login == //
router.post('/login', passport.authenticate('local'), (req, res) => {
	console.log(`User Logged In - ${req.user.username}`);
	const { _id, firstName, lastName, username, email, connections, isTechnical } = req.user;
	const foundUser = { _id, firstName, lastName, username, email, connections, isTechnical };
	return res.status(200).send({
		user: foundUser,
		msg: 'User Logged In',
		token: userToken(req.user),
	});
});
// router.post("/login", (req, res) => {
//   // console.log(`User Logged In - ${req.user.username}`);
//   const { username, password } = req.body;
//   console.log(`User Logged In - ${username} & ${password}`);
// });

// == Logout == //
router.get('/logout', (req, res) => {
	console.log(`Logged Out - ${req.user.username}`);
	const logoutMsg = `${req.user.username} has been successfully logged out.`;
	req.logout();
	res.status(200).send({ msg: logoutMsg });
});

router.get('/dashboard', requireAuth, (req, res) => {
	User.findById(req.user._id)
		.populate('connections')
		.populate('pendingConnectionRequests.requestedUser')
		.populate('pendingConnectionRequests.requestingUser')
		.exec((err, user) => {
		if (err) { console.log(err) }
		console.log('userr', user)
		res.status(200).send({
			user
		});
	})
});

router.get('/istechnical', requireAuth, (req, res) => {
	 let updateIsTechnical = req.user
	 updateIsTechnical.isTechnical = !updateIsTechnical.isTechnical
	 updateIsTechnical.save(() => res.status(200).send({ user: updateIsTechnical }))
})

// Will be refactored once it functional on client side
router.post('/addconnection', requireAuth, (req, res) => {
	let requestingUser = req.user
	let requestedUser = req.body.requestedUser // ID

	let connectionRequest = {
		requestedUser,
		requestingUser
	}

	User.findById(req.user._id, (err, user) => {
		if(user) {
			user.pendingConnectionRequests.push(connectionRequest)
			console.log('User Req', user)
			user.save()
		}
			console.log('findbyid', err)
	})

	User.findById(requestedUser, (err, user) => {
		if(user) {
			user.pendingConnectionRequests.push(connectionRequest)
			console.log('User Reqee', user)
			user.save()
		}
		console.log('findbyid2', err)
	})

	res.json({
		success: true
	})
})

module.exports = router;
