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
    'click #update-story': 'updateStory'
  },

  destroy: function(){
    this.model.destroy();
  },

  editStory: function(){
    $('#modal-body2').empty();
    var editTemplate = HandlebarsTemplates['stories/storyUpdateForm'];
    $('#modal-body2').html(editTemplate(this.model.toJSON()));
  },

  updateStory: function(){
    console.log('clicked update');
    var data = {
      title: $('#title-input').val(),
      content: $('#content-input').val()}
    this.model.set(data);
    this.model.save();
  }

});