const Algorithms = require("../all_codes/algorithm");
const sumAlgorithms = new Algorithms();
process.on("message", (message) => {
  console.log("PID", process.pid);
  const { a, b } = message;
  const sum = sumAlgorithms.sum(a, b);
  process.send(sum);
});
