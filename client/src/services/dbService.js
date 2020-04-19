const url = 'http://localhost:3001';

function getAllRatings () {
    return serverRequest ('/events')
}

function insertRating (body) {
    return serverRequest (`/ratings`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body)
    })
}

function serverRequest (endpoint, options) {
    return fetch(`${url}${endpoint}`, options)
        .then(res => res.status <= 400 ? res: Promise.reject(res))
        .then(res => res.json())
        .catch((err) => {
            console.log(err);
            console.log(`${err.message} fetching /${endpoint}`)
        }); 
}

module.exports = insertRating
    
// module.exports = getAllRatings