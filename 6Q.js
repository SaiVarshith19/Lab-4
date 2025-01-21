let a = Promise.resolve(5);
let b = Promise.resolve(10);
let c = Promise.resolve(15);
var sum = 0;
a.then((r1) => {
  return b.then((r2) => r1 + r2);
})
  .then((r2) => {
    return c.then((r3) => r2 + r3);
  })
  .then((val) => console.log(val));

  
