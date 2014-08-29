App.Views.Story = Backbone.View.extend({
  className: 'story',

  initialize: function(){
    this.template = HandlebarsTemplates['stories/story'];
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click .destroy':'destroy'
  },

  destroy: function(){
    this.model.destroy();
  }

});