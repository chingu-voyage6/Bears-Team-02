const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
/* 
  * Route prefix: /founders 
*/

// == Main Handler for /connect list render == //
router.get("/", requireAuth, (req, res) => {
  const loggedInUserID = req.user._id;
  const loggedInUserConnections = req.user.connections;

  const { isTechnical } = req.query; // Note: returns a String, not a Boolean
  /*  
    .find() params: Filters current loggedInUser and current connections
    with ($nin: "not in" - matches none of values in array ) 
   */
  User.find({
    _id: {
      $nin: [loggedInUserID, ...loggedInUserConnections]
    }
  })
    .populate("pendingConnectionRequests")
    //Filter isTech/Non-Tech - if none(undefined) === all founders
    .then(userList => {
      if (isTechnical === "false" || isTechnical === "true") {
        return userList.filter(
          user => user.isTechnical.toString() === isTechnical
        );
      } else {
        return userList;
      }
    })
    .then(list => res.send(list))
    .catch(err => console.log(err));
});

module.exports = router;

/* Note to future self */

// Started here
/* User.find({
  $and: [
    { _id: { $ne: loggedInUserID } },
    { _id: { $nin: loggedInUserConnections } }
  ]
}) */

//Refactored to here
/* User.find({
    { _id: { $ne: loggedInUserID }, $nin: loggedInUserConnections }
}) */

// And Finally
/* User.find({
  _id: {
    $nin: [loggedInUserID, ...loggedInUserConnections]
  }
}) */
