const fs = require("fs");

async function print() {
  const directory = await fs.promises.readdir("/");

  for (const result of directory) {
    console.log(result);
  }
}
print("./").catch(console.error);
