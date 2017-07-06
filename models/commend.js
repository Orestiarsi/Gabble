'use strict';
module.exports = function(sequelize, DataTypes) {
  var commend = sequelize.define('commend', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return commend;
};