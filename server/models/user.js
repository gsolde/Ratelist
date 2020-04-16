'use strict';

module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define('User',{
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
}


