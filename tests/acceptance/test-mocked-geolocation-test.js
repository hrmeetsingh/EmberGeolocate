import { test } from 'qunit';
import moduleForAcceptance from 'ember-geolocate/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test mocked geolocation');

test('visiting /test-mocked-geolocation', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
