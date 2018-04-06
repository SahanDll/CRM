'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
      Customer.hasMany(models.CustomerDetail, {
          foreignKey: 'customerId',
          as: 'customerDetails',
      });
  };
  return Customer;
};