const axios = require("axios");

const combinePostUser = async () => {
  try {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");

    const combine = posts.data.map((post) => {
      post.user = users.data.find((user) => user.id === post.userId);
      return post;
    });
    return combine;
  } catch (error) {
    console.log(error.message);
  }
};

combinePostUser().then((res) => console.log(res));
