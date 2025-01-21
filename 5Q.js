function fetchData(url) {
  return new Promise((resolve, reject) => {
    let a = url.includes("error");
    if (a) {
      reject("there is an error");
    } else {
      resolve("fetched successfully");
    }
  });
}
console.log(fetchData("https://"));
 