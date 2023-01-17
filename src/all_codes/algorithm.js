module.exports = class Algorithms {
  sum(a, b) {
    let bigNum = a.length > b.length ? a : b;
    let litleNum = a.length > b.length ? b : a;
    let result = [];
    let memoryNum = 0;
    for (let i = -1; i >= -bigNum.length; i--) {
      let snum = (memoryNum + Number(bigNum.at(i)) + +(litleNum.at(i) || 0))
        .toString()
        .split("");
      memoryNum = 0;
      result.unshift(snum.at(-1));
      if (snum.length > 1) memoryNum = +(snum[0] || 0);
    }

    return result.join("");
  }
};
