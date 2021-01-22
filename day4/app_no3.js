const looping = () => {
  const loop = [];

  for (let i = 1; i <= 3; ++i) {
    console.log(i);
    setTimeout(() => {}, 1000);
  }

  Promise.all(loop)
    .then((results) => {
      console.log("Done", results);
    })
    .catch((err) => {
      throw err;
    });
};

looping();
