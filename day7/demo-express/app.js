const express = require("express");
const app = express();
const port = 3000;
const routers = require("./src/router/datarouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TASK 1.a

app.get("/", (req, res) => {
  res.send("Hello Salam Kenal!");
});

//TASK 1.b
app.use("/", routers);

//TASK 1.c
app.use("/nama/alamat", routers);

//TASK 1.d
app.use("/data", routers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
