const url = 'https://api.spotify.com/v1';
const search = window.location.search;
const params = new URLSearchParams(search);
const token = params.get('token');

function searchTracks (input) {
    if (!input) return;
    return spotifyRequest (`/search?q=${input}&type=track&limit=20`, {
        method: 'GET',
        Accept: 'application/json',
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${token}`
        }
    })
}

function spotifyRequest (endpoint, options) {
    return fetch(`${url}${endpoint}`, options)
        .then(res => res.status <= 400 ? res: Promise.reject(res))
        .then(res => res.json())
        .catch((err) => {
            console.log(err);
            console.log(`${err.message} fetching /${endpoint}`)
        }); 
}

module.exports = searchTracks