import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newCustomer(formData) {
            console.log(formData);
            // formData.status = 'new';
            // formData.date = Date.now().toLocaleString();
            var customer = this.store.createRecord(
                'customer', 
                Object.assign(
                    /*{
                        status: 'new',
                        //date: Date.now().toLocaleString(),
                        location: 'labor',
                        description: 'rossz'
                    }, */
                    formData
                )
            );
            customer.save();
            this.transitionToRoute('customers.list');
        }
    }
});
