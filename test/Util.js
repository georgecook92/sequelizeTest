const User = require('../server/models/').ecomm_user;
const ShippingAddress = require('../server/models/').shipping_address;

function createUser() {
    const data = {
        first_name: 'George',
        last_name: 'Cook',
        email: 'george@fieldmargin.com',
    };
    return User.create(data);
}

function createShippingAddress(userId) {
    const data = {
        first_line: 'test',
        second_line: 'address',
        city: 'city',
        postcode: 'postcode',
        userId,
    };
    return ShippingAddress.create(data);
}

module.exports = {
    createUser,
    createShippingAddress,
};
