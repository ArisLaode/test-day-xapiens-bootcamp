const fs = require("fs");

const readDir = () =>
  new Promise((resolve, rejects) =>
    fs.readdir("/", (err, result) => {
      if (err) rejects(err);
      resolve(result);
    })
  );

(async () => {
  const dir = await readDir();
  console.log({ dir });
})();
