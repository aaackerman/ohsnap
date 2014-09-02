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
    'click #select-state': 'stateSelect',
    'click #state-next' : 'householdSelect'
  },

  //user selects state and game obj created
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

  //info on state is returned based on selection
  stateInfo: function(){
    this.$el.html(HandlebarsTemplates['games/stateInfo'](stateObj[0].attributes));
    var difference = (stateObj[0].attributes.benefits_2013) - (stateObj[0].attributes.benefits_2014)
    var differenceEl = $('<h1>')
    differenceEl.addClass('text-center')
    this.$el.append(differenceEl.html("Between 2013 and 2014, the benefits for this state decreased by $" + difference))
    this.$el.append('<button class="btn btn-primary btn-lg center-block" id="state-next">Next</button>');
  }, 

  householdSelect: function(){
    console.log('next!')
  }

});