const url = 'https://api.spotify.com/v1';

function searchTracks () {
    return spotifyRequest ('?q=muse&type=track', {
        method: 'GET',
        Accept: 'application/json',
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer BQBVwh9zJDs6tAmQYkXDiyc6nNzCplBZ828WZJNB_ahDVQU5Kd3psi8sHQErWfMfiedrUBpaOIBoRRCD3zcJXkdiyvxhb6Qud771G05OwTNxCCHwrze1AT04TlGz1u9Bl9hEU43enHD1QCULC0_WJZRCKvxO_rIOaLZR_rv99cTxCladcm3AybUnGfZyWQ`
        }
    })
}

const spotifyRequest = (endpoint, options) => {
    return fetch(`${url}${endpoint}`, options)
        .then(res => res.status <= 400 ? res: Promise.reject(res))
        .then(res => res.json())
        .catch((err) => {
            console.log(`${err.message} fetching /${endpoint}`)
        }); 
}

module.exports = {
    searchTracks
}