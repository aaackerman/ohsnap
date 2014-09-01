//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require underscore
//= require backbone
//= require handlebars
//= require_self 
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .


//Create Global App for Backbone
App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

// on load 
$(function(){
  console.log('JavaScript loaded!')

  //Create stories collection and fetch
  App.Collections.stories = new App.Collections.Stories();
  App.Collections.stories.fetch();

  //Create views for collection
  App.Views.stories = new App.Views.Stories({
    collection: App.Collections.stories
  });

  App.Views.storyForm = new App.Views.StoryForm();
  
  // intro slide show javascrip 
  $('body').on('click', '#intro-1', slideTwo);
  function slideTwo() {
      console.log('clicked')
      $('#intro-1').remove();
      $('#intro-2').show().addClass('animated zoomIn');
  };

  $('body').on('click', '#intro-2', slideThree);
  function slideThree() {
      console.log('clicked')
      $('#intro-2').remove();
      $('#intro-3').show().addClass('animated zoomIn');
  };

  $('body').on('click', '#intro-3', slideFour);
  function slideFour() {
      console.log('clicked')
      $('#intro-3').remove();
      $('#intro-4').show().addClass('animated zoomIn');
  };

  $('body').on('click', '#intro-4', slideFive);
  function slideFive() {
      console.log('clicked')
      $('#intro-4').remove();
      $('#intro-5').show().addClass('animated zoomIn');
  };

});