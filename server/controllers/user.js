'use strict';

const db = require('../models');

async function getAllUsers (req, res) {
    try {
        const userList = await db.User.findAll();
        res.status(200);
        res.json(userList);
    } catch (error) {
        console.log(error); //eslint-disable-line
        res.sendStatus(500);
    }
}

async function insertUser (req, res) {
    try {
        const addedUser = await db.User.create({ userName: req.body.userName });
        res.status(201); 
        res.json(addedUser);
    } catch (error) {
        console.log(error); //eslint-disable-line
        res.sendStatus(500);
    }
}

module.exports = {
    getAllUsers,
    insertUser,
}