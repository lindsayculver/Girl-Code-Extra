import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        groupName: this.get('groupName'),
        content: this.get('content'),
      };
      this.set('addNewBlog', false),
      this.sendAction('save2', params);
    }
  }
});
