App.Views.StartForm = Backbone.View.extend({
  el: '#game-div',

  initialize: function(){
    console.log('new start form created!');
    this.template = HandlebarsTemplates['games/startForm'];
    this.collection = App.Collections.games;
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
  },

  events: {
    'click #select-state': 'stateSelect'
  },

  stateSelect: function(){
    var state = $('#state-input').val();
    stateObj = App.Collections.states.where({state: state});
    var stateId = stateObj[0].attributes.id;
    var user = $('#current-user').html();
    var userId = parseInt(user);
    var data = { user_id: userId, state_id: stateId }
    App.Collections.games.create(data);
    this.stateInfo();
  },

  stateInfo: function(){
    this.$el.html(HandlebarsTemplates['games/stateInfo'](stateObj[0].attributes));
    var difference = (stateObj[0].attributes.benefits_2013) - (stateObj[0].attributes.benefits_2014)
    var differenceEl = $('<h1>')
    this.$el.append(differenceEl.html("That's a difference of $" + difference))
  }


});