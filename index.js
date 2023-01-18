const { SUM } = require("./src/usecases/index.js");
const SumCommonCode = require("./src/common/sum");

const sumUseCase = new SUM(SumCommonCode);
const num = sumUseCase.sum("1234598", "55865", "worker");
num.then((res) => console.log(res)).catch((er) => console.log(er));
