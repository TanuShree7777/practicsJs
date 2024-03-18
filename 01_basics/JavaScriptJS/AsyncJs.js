console.log("Async");

console.log("1:Promise");
const promise1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("p1 Resolved");
  } else {
    reject("p1 rejected");
  }
});
const promise2 = new Promise((resolve, reject) => {
  if (!true) {
    resolve("P2 resolved");
  } else {
    reject;
  }
});

// setTimeout(asyncExample, 3000)

// function asyncExample() {
//     console.log("one of my friend told me not to expect :/")
// }

// // console.log(res)

// setTimeout(function asd() { console.log("qwerty") }, 3000)

function intervalExample() {
  let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}

setInterval(intervalExample, 1000);
