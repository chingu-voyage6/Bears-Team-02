const assert = require("assert");
const User = require("../../models/User");
const testModel = require("./mock_model_helper");

describe("Update User", () => {
  let joe;
  beforeEach(done => {
    joe = testModel();
    joe.save().then(() => done());
  });

  it("can update user firstName", done => {
    joe.update({ firstName: "Alex" }).then(() => {
      User.find().then(user => {
        assert(user[0].firstName === "Alex");
        done();
      });
    });
  });
});
