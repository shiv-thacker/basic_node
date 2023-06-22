const http = require("http"); //call http module

//make server with createserver
const server = http.createServer((req, res) => {
  res.end("Hello from the other sides");
});

//to listen request or varify request we will use listen, we will use port,localhost
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port no 8000");
});
