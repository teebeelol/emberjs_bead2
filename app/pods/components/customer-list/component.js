import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteCustomer(customer) {
            console.log(customer);
            customer.deleteRecord();
            customer.save();
        }
    }
});
