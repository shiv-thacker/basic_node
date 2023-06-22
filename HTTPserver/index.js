const http = require("http"); //call http module
const fs = require("fs");

//we will use Sync to read json because we don't want to call everytime
const getdata = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
const object = JSON.parse(getdata);

//make server with createserver
const server = http.createServer((req, res) => {
  //console.log(req.url);(to show which url is called, like /about , /contact)
  if (req.url == "/") {
    res.end("Hello! welcome to homepage");
  } else if (req.url == "/about") {
    res.end("Hello! welcome to about page");
  } else if (req.url == "/userapi.json") {
    res.writeHead(200, { Contenttype: "application/json" }); //It is require for json file
    res.end(object[1].name);
  } else {
    res.writeHead(404, { Contenttype: "text/html" });
    res.end("<h1>This page is not exist</h1>"); //we can use HTML also
  }
});

//to listen request or varify request we will use listen, we will use port,localhost
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port no 8000");
});
