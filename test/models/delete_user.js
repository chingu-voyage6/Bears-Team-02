const assert = require("assert");
const User = require("../../models/User");
const testModel = require("./mock_model_helper");

describe("Delete user", () => {
  let joe;
  beforeEach(done => {
    joe = testModel();
    joe.save().then(() => done());
  });

  it("can find user and delete them", done => {
    joe
      .remove()
      .then(() => User.findOne({ name: "Joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("can find by id and remove", done => {
    User.findByIdAndRemove(joe._id)
      .then(() => User.findOne({ name: "Joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });
});
