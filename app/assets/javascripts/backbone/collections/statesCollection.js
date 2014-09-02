App.Collections.States = Backbone.Collection.extend({
  url: '/states',
  model: App.Models.State,

  initialize: function(){
    console.log("States Collection Created!")
  }
})