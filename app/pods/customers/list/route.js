import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            customers: this.store.findAll('customer'),
            messages: this.store.findAll('ticket')
        });
        /*var data = {
            customers: this.store.findAll('customer'),
            messages:  this.store.findAll('ticket')
        };
        data.customers.map(function(e){
            e.status = true;
            console.log(e.status);
        });
        return data;*/
    }
});
