const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.find({})
    .then(userList => res.send(userList))
    .catch(err => console.log(err));
}); 

module.exports = router;
