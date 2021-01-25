const axios = require("axios");
const { response } = require("express");
const url =
  "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";

const getData = () =>
  axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log({ product: error }));

const getCategory = async () => {
  const product = await getData();
  const category = product.filter((e) => e.category == "fruits");
  console.log({ category });
};

console.log("category by fruits");
getCategory();
