const path = require("path");

console.log(path.dirname("G:/nodejs/basicnode/PathModule/Pathmodule.js")); //shows whole path
console.log(path.extname("G:/nodejs/basicnode/PathModule/Pathmodule.js")); //file extention
console.log(path.basename("G:/nodejs/basicnode/PathModule/Pathmodule.js")); //filename

console.log(path.parse("G:/nodejs/basicnode/PathModule/Pathmodule.js")); //it sjows root,dir,base,ext,name

const Mypath = path.parse("G:/nodejs/basicnode/PathModule/Pathmodule.js"); //it sjows root,dir,base,ext,name
console.log(Mypath.name); //shows only name
console.log(Mypath.root); //shows only root
