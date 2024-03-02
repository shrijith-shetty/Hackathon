import axios from "axios";

const BASE_URL = "https://youtube86.p.rapidapi.com/api/youtube/links";
const options = {
  params: {
    hl: "en",
    gl: "in",
  },
  headers: {
    "X-RapidAPI-Key": "63202d4363mshde1113e9fc5a2b3p1e75c3jsn7f58a659aeb0",
    "X-RapidAPI-Host": "youtube86.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

