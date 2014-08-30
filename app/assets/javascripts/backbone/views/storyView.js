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
    'click .edit-story': 'editStory'
  },

  destroy: function(){
    this.model.destroy();
  },

  editStory: function(){
    console.log('CLICKED!')
    $('#modal-body').empty();
    var editTemplate = HandlebarsTemplates['stories/storyUpdateForm'];
    $('#modal-body').html(editTemplate(this.model.toJSON()));
  }

});