'use strict';

const router = require('express').Router();
const passport = require('passport');
const user = require('./controllers/user');
const rating = require('./controllers/rating');

// auth with spotify
router.get('/auth/spotify', passport.authenticate('spotify', {
    scope: ['user-read-private', 'user-read-email', 'playlist-modify-private', 'user-modify-playback-state', 'user-read-recently-played'],
    showDialog: true
}));

// authentication
router.get(
    '/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect(`http://localhost:3000/home?token=${req.user.accessToken}&username=${req.user.profile.username}`);
    }
);

router.get('/', (req, res) => res.send('This is working!'));
router.get('/users', user.getAllUsers);
router.post('/users', user.insertUser);

router.get('/ratings', rating.getAllRatings);
router.post('/ratings', rating.insertRating);
router.get('/ratings/:username', rating.getRatedSongsByUser);

module.exports = router;
