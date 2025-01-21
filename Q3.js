function delayMessage(msg, delay, callback) {
  callback(msg, delay);
}
function message(msg, delay) {
  setTimeout(() => {
    console.log(msg);
  }, delay);
}

delayMessage("HELLO", 2000, message);
