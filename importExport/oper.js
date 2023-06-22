const add = (a, b) => {
  return a + b;
};

const name = "vinod";

// module.exports.add = add; // now you can export add function
// module.exports.name = name;// we can change name in this method (module.exports.hii = name)

module.exports = { add, name };
