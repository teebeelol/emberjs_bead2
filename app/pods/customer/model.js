import DS from 'ember-data';

const CustomerModel = DS.Model.extend({
  username: DS.attr('string'),
  name: DS.attr('string'),
  validity: DS.attr('date'),
  phonenumber: DS.attr('string'),
});

CustomerModel.reopenClass({
    FIXTURES: [
        {
            id:1,
            username: 'alfa',
            name: 'Alfás Mátyás',
            validity: '2012-12-12',
            phonenumber: '3435443247239',
        },
        {
            id:2,
            username: 'bravo',
            name: 'Bravós Mátyás',
            validity: '2018-12-12',
            phonenumber: '34343434343434347239',
        },
    ]
});

export default CustomerModel;