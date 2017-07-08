'use strict';
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define('like', {
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  like.associate = function(models) {
     like.belongsTo(models.post, {as: 'post', foreignKey: 'postId'})
     like.belongsTo(models.userInfo, {as: 'user', foreignKey: 'userId'})
  }
  return like;
};
