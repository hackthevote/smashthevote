import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let topicId = this.modelFor('why.topic').get('id');
    return this.store.findRecord('topic', topicId);
  }
});
