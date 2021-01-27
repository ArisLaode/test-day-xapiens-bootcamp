const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({
    nama: "Ananda",
    umur: 25,
    hobi: ["bersepeda", "travelling", "membaca"],
  });
});

router.get("/:name/:alamat", (req, res) => {
  res.send(
    `Nama saya ${req.params.name}, saya tinggal di ${req.params.alamat}`
  );
});

router.get("/data", (req, res) => {
  res.send(`Nama ${req.query.nama} , alamat ${req.query.alamat}`);
});

module.exports = router;
