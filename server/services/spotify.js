const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport');

SPOTIFY_REDIRECT_URI = 'http://localhost:3001/callback'

passport.use(
    new SpotifyStrategy(
      {
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        callbackURL: SPOTIFY_REDIRECT_URI
      },
      function(accessToken, refreshToken, expires_in, profile, done) {
        User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
          return done(err, user);
        });
      }
    )
  );