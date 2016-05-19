import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  headline: attr('string'),
  image: attr('string'),
  body: attr('string')
});
