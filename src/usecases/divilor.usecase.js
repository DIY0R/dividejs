const cp = require("node:child_process");
const path = require("path");

module.exports = class Divilor {
  constructor(pathWorker) {
    this.pathWorker = pathWorker;
  }
  work(args) {
    if (!path.isAbsolute(this.pathWorker)) throw new Error("path is not valid");

    const worker = cp.fork(path.join(__dirname, "../workers/divilor.js"));
    worker.send({ path: this.pathWorker, args });

    return new Promise((resole, rejected) => {
      worker.on("message", (message) => {
        resole({ ...message });
        worker.kill();
      });
      worker.on("error", (code) => rejected(code));
    });
  }
};
