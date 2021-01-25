const axios = require("axios");

const sendGetRequest = async () => {
  try {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const combine = posts.data.map((post) => {
      let postTitle = post.title;
      console.log("title :", postTitle);
    });

    return combine;
  } catch (err) {
    console.error(err);
  }
};

sendGetRequest();
