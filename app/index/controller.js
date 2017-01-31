import Ember from 'ember';

export default Ember.Controller.extend({
  currentPost: Ember.computed('model', function() {
    return Ember.get(this, 'model.lastObject');
  })
});
