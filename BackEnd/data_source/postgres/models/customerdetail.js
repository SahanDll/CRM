'use strict';
module.exports = (sequelize, DataTypes) => {
  var CustomerDetail = sequelize.define('CustomerDetail', {
    item: DataTypes.STRING,
    itemCode: DataTypes.STRING,
    description: DataTypes.STRING,
    discount: DataTypes.BOOLEAN
  }, {});
  CustomerDetail.associate = function(models) {
      CustomerDetail.belongsTo(models.Customer, {
          foreignKey: 'customerId',
          onDelete: 'CASCADE',
      });
  };
  return CustomerDetail;
};