const fs = require("fs");
const biodata = {
  name: "shivang",
  age: 22,
  channel: "thapa technical",
};

// To convert in JSON

const jsondata = JSON.stringify(biodata);
console.log(jsondata);

//to convert JSON to OBJECT
const objData = JSON.parse(jsondata);
console.log(objData.channel);

//First we create the file and put jason data in

fs.writeFile("json1.json", jsondata, (err) => {
  console.log("file created with JSON data.");
});

//now we will convert file's JSON data to object, so that we need to read file

fs.readFile("json1.json", "utf-8", (err, jsondata) => {
  const objectdata = JSON.parse(jsondata);
  console.log(objectdata);
});
