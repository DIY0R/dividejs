const cp = require("node:child_process");
const path = require("path");

console.log(path.join(__dirname, "../workers/sum.js"));
class SUM {
  constructor(algorithms) {
    this.algorithms = algorithms;
  }
  sum(a, b, type) {
    if (type == "main") return this.algorithms.sum(a, b);
    const worker = cp.fork(path.join(__dirname, "../workers/sum.js"));
    worker.send({ a, b });
    return new Promise((resole, rejected) => {
      worker.on("message", (message) => {
        resole(message);
        worker.kill();
      });
      worker.on("exit", (code) => {
        rejected(code);
        process.exit(1);
      });
    });
  }
}
module.exports = SUM;
