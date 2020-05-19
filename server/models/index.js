
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const db = new Sequelize('ratelist', 'gerardsoldevila', '1234', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db
  .authenticate()
  .then(() => {
    console.log('** database connected **');
  })
  .catch((err) => {
    console.error('! database connection error !', err);
  });

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = db.import(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sync(); // {force:true} drops the tables

module.exports = db;
