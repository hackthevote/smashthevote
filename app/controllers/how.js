import Ember from 'ember';

export default Ember.Controller.extend({
  toggleInfo(exp) {
    Ember.$('.' + exp).toggle();
  },
  actions: {
    toggleExplanation(exp) {
      this.toggleInfo(exp);
    }
  }
});
