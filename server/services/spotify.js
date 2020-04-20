const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require('passport');
const db = require('../models');
require('dotenv').config();

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_REDIRECT_URI
    }, 
    function(accessToken, refreshToken, expires_in, profile, done) {
      process.nextTick(async function() { // if user does not exist, user stored in db.Users
        const userExists = await db.User.findOne({
          where: {
            userName: profile.username
          },
        });
        if (userExists === null) db.User.create({ userName: profile.username }); 
        return done(null, {profile, accessToken, refreshToken, expires_in});
      });
    }
  )
);
      