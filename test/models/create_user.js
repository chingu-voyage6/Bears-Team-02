const assert = require("assert");
const testModel = require("./mock_model_helper");

describe("Creating User", () => {
  it("saves a user", done => {
    const joe = testModel();
    joe.save().then(() => {
      assert(!joe.isNew);
      done();
    });
  });
});
