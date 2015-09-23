import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  hometown: DS.attr(),
  favoriteLanguage: DS.attr(),
  quote: DS.attr(),
  picture: DS.attr()
});
