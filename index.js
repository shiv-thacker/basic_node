const fs = require("fs");

fs.writeFileSync("read.txt", "i made file with writefilesync");

fs.writeFileSync("read.txt", "i made file with writefilesync  overwrite");

fs.appendFileSync("read.txt", " apppend data");

fs.readFileSync("read.txt");

const buf_data = fs.readFileSync("read.txt"); // you can use file encodeing to get direct string data.

org_data = buf_data.toString();
console.log(buf_data);
console.log(org_data);

fs.renameSync("read.txt", "rename.txt");
