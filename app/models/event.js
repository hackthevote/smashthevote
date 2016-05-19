import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  date: attr('date'),
  official: attr('boolean')
});
