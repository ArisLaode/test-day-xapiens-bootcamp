const express = require("express");
const router = require("./src/router");
const app = express();
const port = 3000;

// router = require("./src/router");
// const authorRoutes = require("./src/router/author");
// const bookRoutes = require("./src/router/book");
// const publisherRoutes = require("./src/router/publisher");

const { authorRoutes, bookRoutes, publisherRoutes } = require("./src/router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.use("/static", express.static("public"));

app.use((req, res) => {
  res.status(404).json({
    message: "resource not found",
  });
});

// middleware handling 404

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
