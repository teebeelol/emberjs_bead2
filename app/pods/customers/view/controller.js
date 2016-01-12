import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newMessage(formData) {
            //console.log(formData);
            var ticket = this.store.createRecord(
                'ticket', 
                Object.assign(
                    formData
                )
            );
            ticket.save();
            this.transitionToRoute('customers.list');
        }
    }
});
