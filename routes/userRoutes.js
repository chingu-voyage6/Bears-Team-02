const express = require("express");
const router = express.Router();
const User = require("../models/User");
const chalk = require("chalk");

/* Currently Unused, maintaining for potential future refactor to separate some authRoutes */

/* 
  * Route prefix: /user
  * This routing should be used for the User Profile page, to 
  * retrieve and update user info
*/

/* Retrieve LoggedIn User info */
// router.get("/", (req, res) => {
//   const { id } = req.user;
//   User.findById({ _id: id }, (err, user) => {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     }
//     res.send(user);
//   });
// });

// /*
//  May not need this route if we use PUT routing instead
// */
// router.post("/", (req, res) => {
//   // * Other fields from User Schema will be updated from put route below
//   const { firstName, lastName, userName, email, isTechnical } = req.body;
//   const newUser = {
//     firstName,
//     lastName,
//     userName,
//     email,
//     isTechnical
//   };
//   User.create(newUser, (err, user) => {
//     if (err) {
//       throw err;
//     }
//     console.log(chalk.cyan(`${user.name} has been added`));
//     // * temporary handler to confirm successful routing
//     return res.status(200);
//   });
// });

// router.put("/", (req, res) => {
//   // * Handling updates to user profile
//   const { id } = req.user;
//   const { body } = req;
//   //   User.findByIdAndUpdate({ _id: id }, (err, user) => {
//   //     if (err) {
//   //       console.log(err);
//   //       res.send(err);
//   //     }
//   //     res.send(user);
// });

// router.delete("/deleteUser", (req, res) => {
//   const { id } = req.user;
//   User.findByIdAndRemove({ _id: id }, (err, user) => {
//     if (err) {
//       throw err;
//     }
//     console.log(chalk.green(`${user.name} has been deleted`));
//     return res.status(200);
//   });
// });

module.exports = router;
