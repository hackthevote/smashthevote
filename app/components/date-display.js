import Ember from 'ember';

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default Ember.Component.extend({
  dateString: Ember.computed('date', function () {
    let d = this.get('date');
    if (!d) {
      let n = new Date();
      return `${n.getDate()} ${months[n.getMonth()]}`;
    }
  })
});
