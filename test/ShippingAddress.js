const assert = require('assert');
const User = require('../server/models/').ecomm_user;
const ShippingAddress = require('../server/models/').shipping_address;
const Util = require('./Util');

describe('Shipping Address', () => {
    beforeEach(done => {
        ShippingAddress.destroy({
            where: {},
        }).then(() => done());
    });

    it('Create one', done => {
        let userId;
        Util.createUser()
            .then(user => {
                userId = user.id;
                console.log('userId', userId);
                return Util.createShippingAddress(user.id);
            })
            .then(() => ShippingAddress.findOne({ where: { userId: userId } }))
            .then(shippingAddress => {
                assert(shippingAddress.first_line === 'test');
                assert(shippingAddress.second_line === 'address');
                assert(shippingAddress.city === 'city');
                assert(shippingAddress.postcode === 'postcode');
                assert(shippingAddress.userId === userId);
                done();
            });
    });

    it('Create multiple', done => {
        let userId;
        Util.createUser()
            .then(user => {
                userId = user.id;
                console.log('userId', userId);
                return Util.createShippingAddress(userId);
            })
            .then(() => Util.createShippingAddress(userId))
            .then(() => ShippingAddress.findAll({ where: { userId } }))
            .then(shippingAddresses => {
                assert(shippingAddresses.length === 2);
                done();
            });
    });
});
