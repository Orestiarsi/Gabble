'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'userInfos',
      'email',
      {
        type: Sequelize.STRING
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'userInfos',
      'email'
    )
  }
};
