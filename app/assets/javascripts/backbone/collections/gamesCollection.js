App.Collections.Games = Backbone.Collection.extend({
  url: '/games',
  model: App.Models.Game
});