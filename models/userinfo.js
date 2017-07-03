'use strict';
module.exports = function(sequelize, DataTypes) {
  var userInfo = sequelize.define('userInfo', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userInfo;
};
