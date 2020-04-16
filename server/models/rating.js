'use strict';

module.exports = (sequelize, DataTypes) => {
   const Rating = sequelize.define('Rating',{
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trackId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    });
    return Rating;
}