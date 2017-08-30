'use strict';
module.exports = function(sequelize, DataTypes) {
    const ShippingAddress = sequelize.define('shipping_address', {
        first_line: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        second_line: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    ShippingAddress.associate = models => {
        console.log('Models', models);
        ShippingAddress.belongsTo(models.ecomm_user, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
        });
    };
    return ShippingAddress;
};
