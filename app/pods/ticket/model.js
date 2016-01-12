import DS from 'ember-data';

const TicketModel = DS.Model.extend({
  username: DS.attr('string'),
  message: DS.attr('string'),
});

export default TicketModel;