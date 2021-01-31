const express = require("express");
const app = express();
const port = 3000;
const customerRoutes = require("./src/router/customer");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/customers", customerRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "resource not found",
  });
});

// middleware handling 404

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
