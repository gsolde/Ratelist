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

async function getRatedSongsByUser (req, res) {
    try {
        const ratedSongsByUser = await db.Rating.findAll({
            where: {
                userName: req.params.username
            },
            order: [
                ['updatedAt', 'DESC'],
            ],
            attributes: ['trackId', 'rating']
        });
        res.status(200);
        res.json(ratedSongsByUser);
    } catch (error) {
        console.log(error); //eslint-disable-line
        res.sendStatus(500);
    }
}

async function insertOrUpdateRating (req, res) {
    try {
        const foundRating = await db.Rating.findOne({
            where: {
                userName: req.body.userName,
                trackId: req.body.trackId
            },
        });
        if(!foundRating) {
            const addedRating = await db.Rating.create({ userName: req.body.userName, trackId: req.body.trackId, rating: req.body.rating });
            res.status(201); 
            res.json(addedRating);
        } 
        const updatedRating = await db.Rating.update(
            { rating: req.body.rating }, 
            { where: 
                {
                    userName: req.body.userName,
                    trackId: req.body.trackId
                }
            }
            );
            res.status(201);
    } catch (error) {
        console.log(error); //eslint-disable-line
        res.sendStatus(500);
    }
}

module.exports = {
    getAllRatings,
    getRatedSongsByUser,
    insertOrUpdateRating,
}