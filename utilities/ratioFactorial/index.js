const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");
const ratioAndFactorial = (num1, num2, num3) => {
  const factorial = factorialOfNumber(num1);
  const ratio = ratioOfTwoNumbers(num2, num3);
  return { ration, factorial };
};
module.exports = ratioAndFactorial;
