module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('shipping_addresses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            first_line: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            second_line: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            postcode: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            userId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'ecomm_users',
                    key: 'id',
                    as: 'userId',
                },
            },
        }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('shipping_address'),
};
