'use strict';

const db = require('../models');

async function getAllRatings (req, res) {
    try {
        const ratingsList = await db.Rating.findAll({});
        res.status(200);
        res.json(ratingsList);
    } catch (error) {
        console.log(error); //eslint-disable-line
        res.sendStatus(500);
    }
}

async function findRatingByUser (req,res) {
    try {
        const ratingByUser = await db.Rating.findOne({
            where: {
                userName: req.body.userName,
                trackId: req.body.trackId
            },
        });
        res.status(200);
        res.json(ratingByUser);
    } catch (error) {
        console.log(error); //eslint-disable-line
        res.sendStatus(500);
    }
}

async function getRatedSongsByUser (req, res) {
    try {
        const ratedSongsByUser = await db.Rating.findAll({
            where: {
                userName: req.params.username
            },
            // attributes: [trackId] ---> in attributes we can specify the key-value pairs we want back
        });
        res.status(200);
        res.json(ratedSongsByUser);
    } catch (error) {
        console.log(error); //eslint-disable-line
        res.sendStatus(500);
    }
}

async function insertRating (req, res) {
    try {
        const addedRating = await db.Rating.create({ userName: req.body.userName, trackId: req.body.trackId, rating: req.body.rating });
        res.status(201); 
        res.json(addedRating);
    } catch (error) {
        console.log(error); //eslint-disable-line
        res.sendStatus(500);
    }
}

module.exports = {
    getAllRatings,
    getRatedSongsByUser,
    insertRating,
    findRatingByUser
}