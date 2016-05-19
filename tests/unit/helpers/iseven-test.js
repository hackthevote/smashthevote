import { iseven } from 'smashthevote/helpers/iseven';
import { module, test } from 'qunit';

module('Unit | Helper | iseven');

test('iseven detects an even value', function(assert) {
  let result = iseven([42]);
  assert.ok(result === true);
});

test('iseven detects an odd value', function(assert) {
  let result = iseven([1]);
  assert.ok(result === false);
});
