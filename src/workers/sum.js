const sumCommonCode = require("../common/sum");

process.on("message", (message) => {
  console.log("PID", process.pid);
  const { a, b } = message;
  const sum = sumCommonCode.sum(a, b);

  process.send(sum);
});
