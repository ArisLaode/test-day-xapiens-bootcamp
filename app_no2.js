const axios = require("axios");

async function joinApi() {
  try {
    let apiPost = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let responsePost = apiPost.data;

    let updateResult = responsePost.map(async (responsePost) => {
      let responseUser = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      responsePost.users = responseUser.data[0];
      return responsePost;
    });

    Promise.all(updateResult).then((finalResult) => console.log(finalResult));
  } catch (error) {
    console.log(error);
  }
}

joinApi();
