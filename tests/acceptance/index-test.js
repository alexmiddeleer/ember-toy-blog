import { test } from 'qunit';
import moduleForAcceptance from 'toy-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index', {
  beforeEach(){
    server.createList('post', 3);
  }
});

test('visiting /index', function(assert) {

  visit('/index');

  andThen(function() {
    assert.ok($('.page-title').text(), 'It has a page title');
    assert.ok($('.current-post').text(), 'It has a current post');
    assert.equal($('.post-list .post-list-item').length, 3, 'It has 3 posts in the post list');
  });
});

test('clicking a post item transitions to post page', function(assert) {

  visit('/index');
  click('.post-list .post-list-item:first-of-type');

  andThen(function() {
    assert.equal(currentURL(), '/post/1', 'we are now on a post page');
  });
});
