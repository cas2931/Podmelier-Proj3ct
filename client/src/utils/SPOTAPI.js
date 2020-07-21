// import axios from "axios";

// export default {

//      spotifyAuth: function() {
//         return axios.get('/login', function(req, res) {
//             var scopes = 'user-read-private user-read-email';
//             res.redirect('https://accounts.spotify.com/authorize' +
//               '?response_type=code' +
//               '&client_id=' + process.env.REACT_APP_SPOTIFY_ID +
//               (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//               '&redirect_uri=' + encodeURIComponent("/user"));
//             });
//       },  
//     }
// const CLIENT_ID = process.env.REACT_APP_SPOTIFY_ID;
// const REDIRECT_URI = 'http://localhost:3000/user'
// let accessToken;
// const SPOTAPI = {
//     getAccessToken() {
//         if(accessToken) {
//             return accessToken;
//         }

//         //check for accessToken match if it hasn't been set
//         const path = window.location.href
//         const tokenMatch = path.match(/access_token=([^&]*)/);
//         const expiresMatch = path.match(/expires_in=([^&]*)/);

//         if(tokenMatch && expiresMatch) {
//             accessToken = tokenMatch[1];
//             const expiresIn = Number(expiresMatch[1]);
//             //clear token in order to grab new token when current expires
//             window.setTimeout(() => accessToken = '', expiresIn * 1000);
//             window.history.pushState('Access Token', null, '/');
//             return accessToken;
//         } else {
//             const accessURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
//             window.location = accessURL;
//         }
//     },
//     search(term) {
//         const accessToken = SPOTAPI.getAccessToken();
//         return fetch(`https://api.spotify.com/v1/search?type=show,episode&q=${term}`, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         })
//             .then(response => response.json())
//             .then(jsonResponse => {
//                 if(!jsonResponse.body) {
//                     return [];
//                 } else {
//                     return jsonResponse.body.items.map( => ({
//                        id: body.id, 
//                        description: body.description,
//                        name: body.name,
//                        uri: body.uri
//                     }));
//                 }
//             })
//     },
//     savePlaylist(name, BodyURIs) {
//         if(!name || !BodyURIs.length) {
//             return;
//         } else {
//             const accessToken = SPOTAPI.getAccessToken();
//             const headers = { Authorization: `Bearer ${accessToken}` };
//             let userId;

//             return fetch(`https://api.spotify.com/v1/me`, { headers: headers })
//                 .then(response => response.json())
//                 .then(jsonResponse => {
//                     userId = jsonResponse.id;
//                     return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
//                         headers: headers,
//                         method: 'POST',
//                         body: JSON.stringify({ name: name })
//                     })
//                         .then(response => response.json())
//                         .then(jsonResponse => {
//                             const playlistId = jsonResponse.id;
//                             return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
//                                 headers: headers,
//                                 method: 'POST',
//                                 body: JSON.stringify({ uris: trackURIs})
//                             })
//                         });
//                 });
//         }
//     }
// };


// export default SPOTAPI;