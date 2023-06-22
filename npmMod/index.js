const chalk = require("chalk");
const validator = require("validator");

// console.log(chalk.blue("Hello world!"));
// console.log(chalk.blue.italic("Hello world!"));
// console.log(chalk.blue.underline.inverse("Hello world!"));
// console.log(chalk.green.underline.inverse("Succeed"));

const res = validator.isEmail("shivang@gmailmon");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
