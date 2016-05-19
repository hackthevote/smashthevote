import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['argument-container'],
  classNameBindings: ['isRemain:argument__remain:argument__leave'],
  isRemain: Ember.computed('campaign', function () {
    return 'remain' === this.get('campaign');
  }),
  classes: Ember.computed('campaign', function () {
    if (this.get('isRemain')) {
      return 'argument__remain';
    } else {
      return 'argument__leave';
    }
  }),
  compTest: Ember.computed('campaign', function () {
    return `The campaign is: ${this.get('campaign')}`;
  })
});
