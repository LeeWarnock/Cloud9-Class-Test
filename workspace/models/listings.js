'use strict';
module.exports = function(sequelize, DataTypes) {
  var Listings = sequelize.define('Listings', {
    title: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Listings;
};