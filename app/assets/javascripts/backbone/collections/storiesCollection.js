App.Collections.Stories = Backbone.Collection.extend({
  url: '/stories',
  model: App.Models.Story
});