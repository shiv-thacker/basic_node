const os = require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
var freememory = os.freemem();
console.log(`${freememory / 1024 / 1024 / 1024} GB`);

var totalmemory = os.totalmem();
console.log(`${totalmemory / 1024 / 1024 / 1024} GB`);
