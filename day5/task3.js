const axios = require("axios");
require("dotenv").config();

const base_url = process.env.TMDB_BASE_URL;
const key_api = process.env.TMDB_KEY;

class ApiMovie {
  async getData(search) {
    const API = base_url + search;

    let restData = await axios.get(API).catch((error) => console.log(error));
    return restData.data;
  }

  async getDataPupular(search) {
    const API = base_url + search;

    let restData = await axios.get(API).catch((error) => console.log(error));

    return restData.data;
  }
}

const fetch_api = new ApiMovie();

// Get 10+ titles of Indonesian movies
async function titleIDNMovie() {
  const searchTitleInd = `search/movie?api_key=${key_api}&query=indonesia&page=1&region=Indonesia`;
  const getTitleData = await fetch_api.getData(searchTitleInd);
  console.log("getDataTitleInd : ", JSON.stringify(getTitleData), "\n");
}

// Get movie list played by Keanu Reeves
async function movieByKeanu() {
  const search = `search/person?api_key=${key_api}&language=en-US&query=Keanu%20Reeves&page=1`;
  const getData = await fetch_api.getData(search);
  console.log("getDataKeanuReeves : ", JSON.stringify(getData), "\n");
}

// Get movie list played by Robert Downey Jr. and Tom Holland
async function movieRobertTom() {
  const searchPeople = `search/multi?api_key=${key_api}&language=en-US&query=Robert Downey Jr &query=Tom Holland&page=1`;
  const getMultiDatas = await fetch_api.getData(searchPeople, "\n");
}

// Get popular movie list that released on 2016 and the votes above 7.5
async function populerMovie() {
  const searchPopular = `movie/popular?api_key=${key_api}&page=1`;
  const getPularDatas = await fetch_api.getDataPupular(searchPopular);
}

titleIDNMovie();
movieByKeanu();
movieRobertTom();
populerMovie();
