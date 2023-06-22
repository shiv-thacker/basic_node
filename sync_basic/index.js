const fs = require("fs");

//fs.mkdirSync("newfolder");

// fs.writeFileSync(
//   "newfolder/read.txt",
//   "i made file with writefilesync Overwrited"
// );

// fs.appendFileSync("newfolder/read.txt", "It's appended data");

// const direct_originaldata = fs.readFileSync("newfolder/read.txt", "utf8");
// console.log(direct_originaldata);

// fs.renameSync("newfolder/read.txt", "newfolder/renamed.txt");

//fs.unlinkSync("newfolder/renamed.txt");

fs.rmdirSync("newfolder");
