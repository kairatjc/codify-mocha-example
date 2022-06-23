const assert = require("assert");
const fetch = require("node-fetch-commonjs");

describe("Posts", () => {
  it("Get post #1", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const body = await response.text();
    console.log(body);
  });
});

