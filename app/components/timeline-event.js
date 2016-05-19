import Ember from 'ember';

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default Ember.Component.extend({
  classNames: ['timeline__event'],
  classNameBindings: ['official:timeline__event-official'],
  eventDayAndMonth: Ember.computed('date', function () {
    let d = this.get('date');
    return `${d.getDate()} ${months[d.getMonth()]}`;
  })
});
