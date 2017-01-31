import { test } from 'qunit';
import moduleForAcceptance from 'toy-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {

  server.createList('post', 3);
  visit('/index');

  andThen(function() {
    assert.ok($('.page-title').text(), 'It has a page title');
    assert.ok($('.current-post').text(), 'It has a current post');
    assert.equal($('.post-list .post-list-item').length, 3, 'It has 3 posts in the post list');
  });
});
