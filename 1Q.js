function greet(name, callback) {
  callback(name);
}
function message(name) {
  console.log(name);
}
greet("varshith", message);
