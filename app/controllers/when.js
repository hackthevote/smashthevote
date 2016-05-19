import Ember from 'ember';

export default Ember.Controller.extend({
  sortedEvents: Ember.computed.sort('model', 'sortProps'),
  sortProps: ['date']
});
