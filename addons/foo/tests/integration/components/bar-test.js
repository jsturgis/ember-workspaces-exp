import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import foo from 'main-app/tests/test-support/foo-helper';

module('Integration | Component | bar', function(hooks) {
  setupRenderingTest(hooks);
foo();
  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{component "foo@bar"}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#component "foo@bar"}}
        template block text
      {{/component}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
