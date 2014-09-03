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
    'click .destroy':'destroy',
    'click #edit-story': 'editStory',
  },

  destroy: function(){
    this.model.destroy();
  },

  editStory: function(){
    this.$el.replaceWith(HandlebarsTemplates['stories/storyUpdateForm'](this.model.toJSON()));
    $('body').on('click', '#update-story', this.updateStory);
  }

});