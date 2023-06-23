const http = require("http"); //call http module
const fs = require("fs");

//  <---------------------------- 1st way----------------------------------------->

// const server = http.createServer();

// server.on("request", (req, res) => {
//   fs.readFile("input.txt", (err, data) => {
//     if (err) return console.log(err);
//     res.end(data.toString());
//   });
// });

//  <---------------------------- 2nd way----------------------------------------->
// const server = http.createServer();
// server.on("request", (req, res) => {
//   const readstream = fs.createReadStream("input.txt");

//   //chunkfiles is store data that we read
//   readstream.on("data", (chunkfiles) => {
//     res.write(chunkfiles);
//   });
//   readstream.on("end", () => {
//     res.end();
//   });
//   readstream.on("error", (err) => {
//     console.log(err);
//     res.end("This file not found");
//   });
// });

//  <---------------------------- 3rd way with pipe----------------------------------------->

const server = http.createServer();

server.on("request", (req, res) => {
  const readstream = fs.createReadStream("input.txt");
  readstream.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port no 8000");
});
