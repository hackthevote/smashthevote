import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    this._super();
    window.scrollTo(0, 0);
  },
  model() {
    let now = Date.now();
    return this.store.findAll('event')
      .then(function (events) {
        return events.filter(function (event) {
          let d = event.get('date');
          if (d.getTime() > now) {
            return event;
          }
        });
      });
  }
});
