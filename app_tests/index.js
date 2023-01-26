const { sumTest, Divilor } = require("../index");
const path = require("path");
const divilor = new Divilor(path.join(__dirname, "./worker.js"));

divilor.work({ a: 5, b: 2 }).then((res) => {
  console.log(res);
});

console.log("hello");
