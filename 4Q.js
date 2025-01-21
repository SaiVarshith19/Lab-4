function fetchDataWithCallback(callback) {
  success = false;
  setTimeout(() => {
    if (success) {
      callback("no err", false);
    } else {
      callback(null, true);
    }
  }, 2000);
}
function callback(msg, err) {
  if (err) {
    console.log("error");
  } else {
    console.log(msg);
  }
}
fetchDataWithCallback(callback);
