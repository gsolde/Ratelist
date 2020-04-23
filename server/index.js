
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const router = require('./router');
const dbConnection = require('./models/index.js');
const spotifyAuthSetup = require('./services/spotify');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(router);

app.listen(PORT, console.log(`* Server running on port ${PORT}`));
