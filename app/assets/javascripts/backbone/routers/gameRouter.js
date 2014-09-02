App.Routers.Game = Backbone.Router.extend({
  routes: {
    'start': 'startGame'
  },

  startGame: function(){
    console.log('Game begin!')
    var id = $('#current-user').html();
    console.log(id);
  }

});