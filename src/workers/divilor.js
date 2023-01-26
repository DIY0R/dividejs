process.on("message", ({ path, args }) => {
  const outer = require(path);
  console.log("PID", process.pid);
  // console.log({ ...args }
  const result = outer.work(args);
  process.send({ result });
});
