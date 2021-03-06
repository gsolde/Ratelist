
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const router = require('./router');
const spotifyAuthSetup = require('./services/spotify');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(router);

app.listen(PORT, console.log(`* Server running on port ${PORT}`));
