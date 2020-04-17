'use strict';

const express = require('express');
const router = require('./router');
const cors = require('cors');
const dbConnection = require('./models/index.js');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, console.log(`* Server running on port ${PORT}`))

