const axios = require("axios");
const API = "https://httpbin.org";

const dataJson = {
  id: 1,
  name: "andy",
  address: "bintaro",
};

class restDataApi {
  async getData() {
    try {
      let restGet = await axios.get(`${API}/get`);
      return restGet.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteData() {
    try {
      let restDelete = await axios.delete(`${API}/delete`, { data: dataJson });
      return restDelete.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async postData() {
    try {
      let restPost = await axios.post(`${API}/post`, { data: dataJson });
      return restPost.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async putData() {
    try {
      let restPut = await axios.put(`${API}/put`, { data: dataJson });
      return restPut.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async patchData() {
    try {
      let restPatch = await axios.patch(`${API}/patch`, { data: dataJson });
      return restPatch.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

const restData = new restDataApi();

async function resultEnd() {
  const getData = await restData.getData();
  console.log({ getData: getData }, "\n", "-".repeat(40));

  const deleteData = await restData.deleteData();
  console.log({ deleteData: deleteData }, "\n", "-".repeat(40));

  const postData = await restData.postData();
  console.log({ postData: postData }, "\n", "-".repeat(40));

  const putData = await restData.putData();
  console.log({ putData: putData }, "\n", "-".repeat(40));
}

resultEnd();
