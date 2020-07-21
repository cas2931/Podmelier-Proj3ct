import axios from "axios";

export default {
  getAllGenres: function () {
    return axios.get(
      "https://listen-api.listennotes.com/api/v2/genres?top_level_only=1",
      {
        headers: { "X-ListenAPI-Key": `${process.env.REACT_APP_LN_KEY}` },
      }
    );
    // .header(process.env.REACT_APP_LN_KEY);
  },
  getTopLists: function (id) {
    return axios.get(
      "https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=" +
        id +
        "&page=2&region=us&safe_mode=0",
      {
        headers: { "X-ListenAPI-Key": `${process.env.REACT_APP_LN_KEY}` },
      }
    );
    // .header(process.env.REACT_APP_LN_KEY);
  },
};
// 21 Genres, GET /best_podcasts by genre
