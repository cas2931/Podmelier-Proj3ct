import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {


    getAllGenres: function() {
        return axios.get('https://listen-api.listennotes.com/api/v2/genres?top_level_only=1')
        .header(process.env.REACT_APP_LN_KEY);
      }, 
    getTopLists: function() {
        return axios.get('https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id='+ id+ '&page=2&region=us&safe_mode=0')
        .header(process.env.REACT_APP_LN_KEY);
      }, 
  }
// 21 Genres, GET /best_podcasts by genre
