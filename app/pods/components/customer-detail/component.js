import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),
    
    actions: {
        submit() {
            /*if (!this.validate()) {
                return;
            }
            */
            this.get('onSave')({
                username: this.$('#username').val(),
                message: this.$('#message').val(),
            });
        }
    },
    
    validate() {
        var message = this.$('#message').val();
        var username = this.$('#username').val();
        
        this.set('errors.message', message === '' ? 'Kötelező kitölteni!' : '');
        this.set('errors.username', username === '' ? 'Kötelező kitölteni!' : '');
        
        return this.get('errors.message') === '' &&
               this.get('errors.username') === '';
    }
}); 
