import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | table', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:table');
    assert.ok(route);
  });
});
