const Helper = require("./helper");
const helper = new Helper();

describe("Test CSV Parser API", () => {
  test("should return empty response when empty body is passed", async () => {
    const response = await helper.apiServer.get('/', {});
    expect(response.text).toBe('');
  })
});
