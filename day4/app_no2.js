const axios = require("axios").default;

const getPost = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data)
    .catch((error) => console.log({ user: error }));

const getUser = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);

const mapToUser = (post, users) => {
  const user = users.find((e) => e.id === post.userId);
  post.user = user;
  return post;
};

const getAll = async () => {
  let post = await getPost();
  const user = await getUser();
  post = post.map((e) => mapToUser(e, user));
  console.log({ post1: post[0] }); // slicing satu object index ke 0
  //   console.log(post); // kalau mau nampilin semua dalam array
};

getAll();
