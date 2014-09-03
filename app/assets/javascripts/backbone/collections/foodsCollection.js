App.Collections.Foods = Backbone.Collection.extend({
  url: '/foods',
  model: App.Models.Food
});