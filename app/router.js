import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('why', function() {
    this.route('topic', {
      path: ':topic'
    }, function() {
      this.route('remain');
      this.route('leave');
    });
  });
  this.route('when');
  this.route('how');
});

export default Router;
