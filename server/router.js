'use strict';

const router = require('express').Router();
const user = require('./controllers/user');
const rating = require('./controllers/rating');

router.get('/', (req, res) => res.send('This is working!'));
router.get('/users', user.getAllUsers);
router.post('/users', user.insertUser);

router.get('/ratings', rating.getAllRatings);
router.post('/ratings', rating.insertRating);
router.get('/ratings/:username', rating.getRatedSongsByUser);

module.exports = router;
