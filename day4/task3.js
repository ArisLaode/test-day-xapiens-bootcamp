for (let i = 1; i <= 3; i++) {
  setTimeout(() => {}, 1000);
}

console.log("Done");
console.log("awnser");

function delay(ms) {
  return new Promise(function (resolve, rejected) {
    setTimeout(resolve, ms);
  });
}

async function loading() {
  for (let i = 1; i <= 3; i++) {
    console.log(i);
    await delay(1000);
  }
  console.log("Done");
}

// loading();

function run() {
  return new Promise((resolve, reject) => {
    for (let i = 1; i <= 3; i++) {
      console.log(i);
      setTimeout(() => {
        resolve();
      }, 1000);
    }
  });
}

run().then(() => console.log("Done"));
