class myWork {
  work({ a, b }) {
    let num = 0;
    for (let i = 0; i <= 200_000_000; i++) {
      num += i; 
    }
    return num * a * b;
  }
}
module.exports = new myWork();
