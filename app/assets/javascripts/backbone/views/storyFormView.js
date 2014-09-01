App.Views.StoryForm = Backbone.View.extend({
  el: '#modal-body',

  initialize: function(){
    this.template = HandlebarsTemplates['stories/storyForm'];
    this.collection = App.Collections.stories;
    this.render();
  }, 

  render: function(){
    this.$el.html(this.template());
  },

  events: {
    'click #submit-story': 'newStory'
  },

  newStory: function(){
    var data = {
      title: this.$('#title-input').val(),
      content: this.$('#content-input').val()
    };

    this.collection.create(data, {success: function() {
      $('#title-input').val('');
      $('#content-input').val('');
      }
    });
  }

}); 