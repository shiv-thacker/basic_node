const http = require("http"); //call http module

//make server with createserver
const server = http.createServer((req, res) => {
  //console.log(req.url);(to show which url is called, like /about , /contact)
  if (req.url == "/") {
    res.end("Hello! welcome to homepage");
  } else if (req.url == "/about") {
    res.end("Hello! welcome to about page");
  } else {
    res.writeHead(404, { Contenttype: "text/html" });
    res.end("<h1>This page is not exist</h1>"); //we can use HTML also
  }
});

//to listen request or varify request we will use listen, we will use port,localhost
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port no 8000");
});
