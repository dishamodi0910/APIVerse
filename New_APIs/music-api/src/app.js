require('dotenv').config()
const path = require('path')
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID ,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URL
});

const app = express()

const publicDirectoryName = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryName))

app.get('/login', (req, res) => {

    const scope = ['user-read-private', 'user-read-email', 'user-read-playback-state', 'user-modify-playback-state'];
    res.redirect(spotifyApi.createAuthorizeURL(scope));
});

app.get('/callback', (req, res) => {
    const error = req.query.error 
    const code = req.query.code
    const state = req.query.state
  
    if (error){
        return res.send(`Error : ${error}`)
    }

    spotifyApi.authorizationCodeGrant(code).then((data) => {
        const accessToken = data.body['access_token']
        const refreshToken = data.body['refresh_token'] 
        const expiresIn = data.body['expires_in']

        spotifyApi.setAccessToken(accessToken)
        spotifyApi.setRefreshToken(refreshToken)

        res.sendFile(path.join(__dirname, '../public', 'search.html'));
        
        setInterval(async () => {
            const data = await spotifyApi.refreshAccessToken()
            const accessTokenRefreshed = data.body['access_token']

            spotifyApi.setAccessToken(accessTokenRefreshed)
        }, expiresIn/2*1000)
    }).catch((error) => {
        return res.send({
            error : error.body.error_description,
            solution : 'Session has expired! Login Again to continue!!'
        })
    })
});


app.get('/search', (req, res) => {
    const {q} = req.query
    spotifyApi.searchTracks(q).then((searchData) => {
        const trackUri = searchData.body.tracks.items[0]
        res.send(trackUri)
    }).catch((error) => {
        res.send({
            error : 'Sorry! We could not find a match. Try another search and if issue persists, login again to continue!'
        })
    })
})


app.get('/play', (req, res) => {
    const { uri } = req.query
    spotifyApi.play({uris : [uri]}).then(() => {
        res.sendFile(path.join(__dirname, '../public', 'play.html'));

    }).catch((error) => {
        res.send(`Error in playing song : ${error}`)
    })
})    

app.get('/help' , (req, res) => {
    res.send({
        message : 'This Page is built to help you with the functionalities of app!🙂',
        title : 'Help Section'
    })
})

app.get('*',(req, res) => {
    res.send({
        title: '404 Page',
        message: 'Page could not be found!'
    })
})

app.listen(3000, () => {
    console.log('Server has started functioning!')
})