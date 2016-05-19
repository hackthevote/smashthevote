import Ember from 'ember';

export function iseven([num]/*, hash*/) {
  return num % 2 === 0;
}

export default Ember.Helper.helper(iseven);
