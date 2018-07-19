const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt


passport.serializeUser((user, done) => {
  // user.id refers to mongo's _id
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
}

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, { password: 0 }, (err, user) => {
    if(err) { return done(err, false) }

    if(user) { return done(null, user) }

    return done(null, null)
  })
})

// Tell passport to use theses strategies
passport.use(jwtLogin)

passport.use(new LocalStrategy(User.authenticate()));
