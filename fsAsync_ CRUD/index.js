const fs = require("fs");

// fs.writeFile("read.txt", "today is awsome way", (error) => {
//   console.log("file is created");
//   console.log(error);
// });

// fs.appendFile("read.txt", " append in asyncronous", (error) => {
//   console.log("task completed");
// });

fs.readFile("read.txt", "utf-8", (error, data) => {
  console.log(data);
});
