const EventEmmiter = require("events"); //it's class

const event = new EventEmmiter(); //make object of event

//create event on

event.on("SuccessMessage", () => {
  console.log("sent message to client");
});

event.on("SuccessMessage", () => {
  console.log("sent message to employee");
});

event.on("SuccessMessage", () => {
  console.log("sent message to Manager");
});
event.on("arguments", (sc, msg) => {
  console.log(`The source code is ${sc} and message is ${msg}`);
});

event.emit("SuccessMessage"); // we can run multiple task with single emmit

event.emit("arguments", 200, "OK"); // we can pass argument with help of event
