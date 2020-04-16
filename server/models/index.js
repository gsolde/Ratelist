'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);

const db = new Sequelize('ratelist', 'gerardsoldevila', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });

  db
  .authenticate()
  .then(() => {
    console.log('** database connected **');
  })
  .catch(err => {
    console.error('! database connection error !', err);
  });

  //readDirSync reads files in models folder

  fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = db['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

  db.sync(); //{force:true} to drop the tables (if changes on the models are made)

  module.exports = db;