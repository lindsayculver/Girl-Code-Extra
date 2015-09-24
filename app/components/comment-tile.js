import Ember from 'ember';

export default Ember.Component.extend({
 isContentShowing: false,
 actions: {
   contentShow: function() {
     this.set('isContentShowing', true);
   },
   contentHide: function() {
     this.set('isContentShowing', false);
   },
   delete(comment) {
     if (confirm('Are you sure you want to delete this comment?')) {
       this.sendAction('destroyComment', comment);
   }
  }
 }
});
