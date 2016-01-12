import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyCustomer(formData) {
            // console.log(formData);
            let customer = this.get('model');
            console.log(customer);
            customer.setProperties(formData);
            return customer.save().then(() => {
                this.transitionToRoute('customers.list');
            });
        }
    }
});
