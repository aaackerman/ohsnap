App.Views.Stories = Backbone.View.extend({
  
  // my part of the DOM tree
  el: '#stories-list',

  initialize: function(){
    console.log('Stories list view created.');
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderOne: function(story){
    var storyView = new App.Views.Story({model: story});
    this.$el.append(storyView.$el);
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  }
  
});