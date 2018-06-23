const assert = require("assert");
const User = require("../../models/User");
const testModel = require("./mock_model_helper");

describe("Read User", () => {
  let joe;
  beforeEach(done => {
    joe = testModel();
    joe.save().then(() => done());
    // console.log(joe);
  });

  it("can read the user", done => {
    User.find({ firstName: "Joe" }).then(users => {
      //   console.log("user", users);
      assert(joe._id.toString() === users[0]._id.toString());
      done();
    });
  });

  it("find a user with a particular id", done => {
    User.findOne({ _id: joe._id }).then(user => {
      assert(user.firstName === "Joe");
      done();
    });
  });
});
