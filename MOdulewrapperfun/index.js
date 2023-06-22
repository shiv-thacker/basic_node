const name = "shivang";
console.log(name);
console.log(__dirname);
console.log(__filename);

//when we run code in nodejs, it actually run into function (function(require,exports,__dirname,__filename){console.log(__dirname);})
//It also call as IIFE effects where your code automatically run into functions
