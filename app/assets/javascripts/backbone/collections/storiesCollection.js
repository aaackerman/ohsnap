App.Collections.Stories = Backbone.Collection.extend({
  url: '/storieslist',
  model: App.Models.Story
});