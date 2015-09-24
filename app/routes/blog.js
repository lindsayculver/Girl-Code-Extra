import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash ({
    blogs: this.store.findAll('blog'),
    comments: this.store.findAll('comment')
  });
},

  actions: {
    save3(params) {
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('blog');
    },

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var blog = params.blog;
      blog.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return blog.save();
      });
      this.transitionTo('blog', params.blog);
    },

    update(blog, params) {
       Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          blog.set(key,params[key]);
        }
      });
      blog.save();
      this.transitionTo('blog');
    },

    destroyBlog(blog) {
      blog.destroyRecord();
      this.transitionTo('blog');
    },

    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('blog');
    }
  }
});
