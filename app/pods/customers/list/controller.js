import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newCustomer(formData) {
            var customer = this.store.createRecord(
                'customer', 
                Object.assign(
                   /* {
                        status: 'new',
                        //date: Date.now().toLocaleString(),
                        location: 'labor',
                        description: 'rossz'
                    }, */
                    formData
                )
            );
            customer.save();
            $('.modal').modal('hide');
            //this.transitionToRoute('errors.list');
        }
    }
});
