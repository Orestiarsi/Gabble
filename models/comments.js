'use strict';
module.exports = function(sequelize, DataTypes) {
  var commend = sequelize.define('comments', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  commend.associate = function(models){
    commend.belongsTo(models.post,{as:'post', foreignKey: 'postId'})
  }
  return commend;
};
