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


//Global App Obj for Backbone
App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(function(){
  console.log('JavaScript loaded!')

  //STORIES BACKBONE 
  //Create Stories Collection and Fetch
  App.Collections.stories = new App.Collections.Stories();
  App.Collections.stories.fetch();

  //Create Views for Collection
  App.Views.stories = new App.Views.Stories({
    collection: App.Collections.stories
  });

  //Story Form View
  App.Views.storyForm = new App.Views.StoryForm();
  
  //STATES BACKBONE
  App.Collections.states = new App.Collections.States();
  App.Collections.states.fetch();

  //GAMES BACKBONE
  App.Collections.games = new App.Collections.Games();
  App.Collections.games.fetch();
  App.Routers.game = new App.Routers.Game();

  // Intro Slides JS
  $('body').on('click', '#intro-1', slideTwo);
  function slideTwo() {
      $('#intro-1').remove();
      $('.intro-1').remove();
      $('#intro-2').show().addClass('animated zoomIn');
      $('#intro-2').append('<i class="fa fa-sort-desc intro-2"></i>')
  };

  $('body').on('click', '#intro-2', slideThree);
  function slideThree() {
      $('#intro-2').remove();
      $('.intro-2').remove();
      $('#intro-3').show().addClass('animated zoomIn');
      $('#intro-3').append('<i class="fa fa-sort-desc intro-3"></i>')
  };

  $('body').on('click', '#intro-3', slideFour);
  function slideFour() {
      $('#intro-3').remove();
      $('.intro-3').remove();
      $('#intro-4').show().addClass('animated zoomIn');
      $('#intro-4').append('<i class="fa fa-sort-desc intro-4"></i>')
  };

  $('body').on('click', '#intro-4', slideFive);
  function slideFive() {
      $('#intro-4').remove();
      $('.intro-4').remove();
      $('#intro-5').show().addClass('animated zoomIn');
      $('#play-button').css({'display' :'inline'});
  };
  
});