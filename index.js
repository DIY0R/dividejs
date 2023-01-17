const Algorithms = require("./src/all_codes/algorithm");

const cp = require("node:child_process");
class Divide {
  constructor(algorithms) {
    this.algorithms = algorithms;
  }

  sum(a, b, type) {
    if (type == "main") return algorithms.sum(a, b);
    const worker = cp.fork(__dirname + "/src/workers/sum.js");
    worker.send({ a, b });
    return new Promise((resole, rejected) => {
      worker.on("message", (message) => {
        resole(message);
        process.exit(0);
      });
      worker.on("exit", (code) => {
        rejected(code);
        process.exit(1);
      });
    });
  }
}

const algorithms = new Algorithms();
const divJs = new Divide(algorithms);
const num = divJs.sum("1234598", "55865", "main");
num.then((res) => console.log(res));
console.log(num);
console.log(__dirname + "/workers/sum.js");
