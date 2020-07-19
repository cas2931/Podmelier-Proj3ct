import axios from "axios";

export default {

     spotifyAuth: function() {
        return axios.get('/login', function(req, res) {
            var scopes = 'user-read-private user-read-email';
            res.redirect('https://accounts.spotify.com/authorize' +
              '?response_type=code' +
              '&client_id=' + process.env.REACT_APP_SPOTIFY_ID +
              (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
              '&redirect_uri=' + encodeURIComponent("/user"));
            });
      },  
    }
   