import Ember from 'ember';

export default Ember.Component.extend({

updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        title: this.get('title'),
        groupName: this.get('groupName'),
        content: this.get('content'),
      };
      this.set('updateblogForm', false);
      this.sendAction('update', blog, params);
    }
  }
});
