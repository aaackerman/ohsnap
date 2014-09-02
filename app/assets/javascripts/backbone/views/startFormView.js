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
    'click #state-next' : 'householdSelect',
    'click #select-household' : 'getHouseholdSize',
    'click #household-next': 'getIncome'
  },

  //user selects state and game obj created
  stateSelect: function(){
    var state = $('#state-input').val();
    stateObj = App.Collections.states.where({state: state});
    var stateId = stateObj[0].attributes.id;
    var user = $('#current-user').html();
    var userId = parseInt(user);
    var data = { user_id: userId, state_id: stateId }
    thisGame = App.Collections.games.create(data);
    this.stateInfo();
  },

  //info on state is returned based on selection
  stateInfo: function(){
    this.$el.html(HandlebarsTemplates['games/stateInfo'](stateObj[0].attributes));
    var difference = (stateObj[0].attributes.benefits_2013) - (stateObj[0].attributes.benefits_2014)
    var differenceEl = $('<h1>')
    differenceEl.addClass('text-center animated fadeIn')
    this.$el.append(differenceEl.html("Between 2013 and 2014, the benefits for this state decreased by $" + difference))
    this.$el.append('<button class="btn btn-primary btn-lg center-block" id="state-next">Next</button>');
  }, 

  householdSelect: function(){
    this.$el.html(HandlebarsTemplates['games/householdForm'])
  }, 

  getHouseholdSize: function(){
    var size = $('#household-input').val();
    thisGame.set({household_size: parseInt(size)});
    thisGame.save();
    this.showMaxAllotment();
  },

  showMaxAllotment: function(){
    var size = thisGame.attributes.household_size
    var maxAllotment = 0;
    var prevAllotment = 0;
    
    if (size === 8) {
      maxAllotment = 1138
      prevAllotment = 1202
    } else if (size === 7 ) {
      maxAllotment = 995
      prevAllotment = 1052
    } else if (size === 6) {
      maxAllotment = 900
      prevAllotment = 952
    } else if (size === 5) {
      maxAllotment = 750
      prevAllotment = 793
    } else if (size === 4) {
      maxAllotment = 632 
      prevAllotment = 668
    } else if (size === 3) {
      maxAllotment = 497
      prevAllotment = 526
    } else if (size === 2) {
      maxAllotment = 347
      prevAllotment = 367
    } else {
      maxAllotment = 189
      prevAllotment = 200
    }

  var difference = prevAllotment - maxAllotment;
  
  // show data on page
  this.$el.empty();
  var element = $('<h1>').addClass('text-center big-text animated fadeIn');
  element.text("The max allotment for your household size is $" + maxAllotment + " per month. In 2013, the maximum was $" + prevAllotment + ". That's a differnce of $" + difference + ". But let's get a little more specific...")
  this.$el.append(element);
  this.$el.append('<button class="btn btn-primary btn-lg center-block" id="household-next">Next</button>');
  },

  getIncome: function(){
    this.$el.html(HandlebarsTemplates['games/incomeForm']);
  }

});