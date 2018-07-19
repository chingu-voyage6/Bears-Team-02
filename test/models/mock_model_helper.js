const User = require("../../models/User");

function testModel() {
  const joe = new User({
    firstName: "Joe",
    lastName: "Smith",
    username: "jsmith",
    email: "jsmith@smith.com",
    location: {
      city: "SF",
      state: "CA",
      countryCode: "USA"
    },
    isTechnical: true
  });
  return joe;
}

module.exports = testModel;
