import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                username: this.$('#username').val(),
                name: this.$('#name').val(),
                validity: new Date(this.$('#validity').val()),
                phonenumber: this.$('#phonenumber').val(),
            });
        }
    },
    
    validate() {
        var username = this.$('#username').val();
        var name = this.$('#name').val();
        var validity = new Date(this.$('#validity').val());
        var phonenumber = this.$('#phonenumber').val();
        
        this.set('errors.username', username === '' ? 'Felhasználónév kötelező' : '');
        this.set('errors.name', name === '' ? 'Név kötelező' : '');
        this.set('errors.validity', validity === '' ? 'Érvényesség kötelező' : '');
        this.set('errors.phonenumber', phonenumber === '' ? 'Telefonszám kötelező' : '');
        
        return this.get('errors.username') === '' &&
               this.get('errors.name') === '' &&
               this.get('errors.validity') === '' &&
               this.get('errors.phonenumber') === '';
    }
});
