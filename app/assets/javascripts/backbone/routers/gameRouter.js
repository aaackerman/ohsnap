App.Routers.Game = Backbone.Router.extend({

  routes: {
    'stateinfo': 'stateInfo'
  },

  stateInfo: function(){
    console.log('navigated!')
  }

});