import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  ageRange: DS.attr(),
  weeks: DS.attr(),
  picture: DS.attr() 
});
