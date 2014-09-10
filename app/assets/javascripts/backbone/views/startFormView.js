App.Views.StartForm = Backbone.View.extend({
  el: '#game-div',

  initialize: function(){
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
    'click #household-next': 'getIncome',
    'click #select-income': 'calcEligibility',
    'click #allotment-next': 'startShopping',
    'click #add-item': 'addItem',
    'click #checkout': 'checkout'
  },

  //User Selects State and Game Obj Created
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

  //Info on State is Returned Based on Selection
  stateInfo: function(){
    this.$el.html(HandlebarsTemplates['games/stateInfo'](stateObj[0].attributes));
    var difference = (stateObj[0].attributes.benefits_2013) - (stateObj[0].attributes.benefits_2014)
    
    //Function to Convert Big Nums to Have Commas
    var numberWithCommas = function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var differenceWithCommas = numberWithCommas(difference);
    var differenceEl = $('<h1>').addClass('text-center animated fadeIn')
    this.$el.append(differenceEl.html("Between 2013 and 2014, the benefits for this state decreased by $" + differenceWithCommas))
    this.$el.append('<button class="btn btn-primary btn-lg center-block" id="state-next">Next</button>');
  }, 

  //Appends Household Selection Form
  householdSelect: function(){
    this.$el.html(HandlebarsTemplates['games/householdForm'])
  }, 

  //Gets Household Size On User Selection
  getHouseholdSize: function(){
    var size = $('#household-input').val();
    thisGame.set({household_size: parseInt(size)});
    thisGame.save();
    this.showMaxAllotment();
  },

  //Shows Max Allotment Based on User Household Size
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
  
  //Show Data on Allotments 
  this.$el.empty();
  var element = $('<h1>').addClass('text-center big-text animated fadeIn');
  element.text("The max allotment for your household size is $" + maxAllotment + " per month. In 2013, the maximum was $" + prevAllotment + ". That's a differnce of $" + difference + ". Let's get a little more specific...")
  this.$el.append(element);
  this.$el.append('<button class="btn btn-primary btn-lg center-block" id="household-next">Next</button>');
  },

  //Shows Form for Income Range
  getIncome: function(){
    this.$el.html(HandlebarsTemplates['games/incomeForm']);
  }, 

  //Calcs if User is Eligable Based on Income Selection
  calcEligibility: function(){
    var income = $('#rangevalue').val();
    var isBelow = false;
    var size = thisGame.attributes.household_size;
    if (size === 1 && income <= 1245){
      isBelow = true
    } else if (size === 2 && income <= 1681) {
      isBelow = true
    } else if (size === 3 && income <= 2111) {
      isBelow = true
    } else if (size === 4 && income <= 2552) {
      isBelow = true 
    } else if (size === 5 && income <= 2987) {
      isBelow = true
    } else if (size === 6 && income <= 3423) {
      isBelow = true
    } else if (size === 7 && income <= 3858) {
      isBelow = true
    } else if (size === 8 && income <= 4294) {
      isBelow = true
    } else {
      isBelow = false 
    }

    if (isBelow === true ){
      thisGame.set({income: income});
      thisGame.save();
      this.calcAllotment();
    } else {
      $('.error').remove();
      this.$el.append('<br><div class="alert alert-danger error" role="alert" class="text-center">You do not recieve SNAP benefits if you make above 130 percent of the poverty line. Please select another income amount.</div>');
    }
  },

  calcAllotment: function(){
    var income = thisGame.attributes.income
    var athird = (income * 0.3)
    var size = thisGame.attributes.household_size
    var allotmentNow = 0;
    var allotmentBefore = 0;
    if (size == 8) {
      allotmentNow = (1137 - athird);
      allotmentBefore = (1202 - athird);
    } else if (size == 7) {
      allotmentNow = (995 - athird);
      allotmentBefore = (1052 - athird);
    } else if (size == 6) {
      allotmentNow = (900 - athird);
      allotmentBefore = (952 - athird);
    } else if (size == 5) {
      allotmentNow = (750 - athird);
      allotmentBefore = (794 - athird);
    } else if (size == 4) {
      allotmentNow = (632 - athird);
      allotmentBefore = (668 - athird);
    } else if (size == 3) {
      allotmentNow = (497 - athird);
      allotmentBefore = (526 - athird);
    } else if (size == 2) {
      allotmentNow = (347 - athird);
      allotmentBefore = (367 - athird);
    } else if (size == 1) {
      allotmentNow = (189 - athird);
      allotmentBefore = (200 - athird);
    }

    //If allotments are positive numbers continue game, else error
    if (allotmentNow && allotmentBefore > 0) {
      var weekly = (allotmentNow / 4)
      thisGame.save({allotment: allotmentNow, allotment_before: allotmentBefore, weekly_allotment: weekly});
      this.showAllotment();
    } else {
      $('.error').remove();
      this.$el.append('<br><div class="alert alert-danger error" role="alert" class="text-center">With this calculation, you would not recieve benefits. Please select a lower income amount to continue.</div>');
    }
  },

  showAllotment: function(){
    this.$el.empty();
    this.$el.html(HandlebarsTemplates['games/showAllotment'](thisGame.attributes))
  },

  //Adds Shopping Form
  startShopping: function(){
    var data = App.Collections.foods.models;
    this.$el.empty();
    this.$el.html(HandlebarsTemplates['games/foodsForm'](data))
    $('#allotment').text("Allotment $" + thisGame.attributes.weekly_allotment)
  },

  // Runs Dynamic Calculations when Adding Items
  addItem: function(){
    //Gets input food val and takes out price (rounded)
    var foodSelection = $('#foods-input').val();
    var getPrice = function(item){
      var string = (''+ item +'')
      var price = string.substring(1,6);
      return price;
    };

    //Rounds price for calculations
    var preciseRound = function(num, decimals) {
      return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
    };

    //Updates cart and allotment with food price/selection
    var priceVal = getPrice(foodSelection);
    var priceInt = parseFloat(priceVal);
    var roundedPrice = preciseRound(priceInt, 2);

    //Calcs for Allotment Updates
    var item = $('<li>').text(foodSelection)
    item.appendTo('#items-list');
    var allotmentString = $('#allotment').text();
    var initialAllotment = allotmentString.substring(11, 15);
    var newAllotment = initialAllotment - roundedPrice;
    var roundedAllotment = preciseRound(newAllotment, 2);
    $('#allotment').text("Allotment $" + roundedAllotment);
    
    // Calcs for Cart Total Updates
    var oldTotal = $('#cart-total').text()
    var newTotal = parseFloat(oldTotal) + roundedPrice;
    $('#cart-total').text(preciseRound(newTotal, 2));
    this.checkAllotment(roundedAllotment);
  },

  //Checks if Budget Reached
  checkAllotment: function(allotment){
    if (allotment > 0 ) {
      console.log('Keep shopping!')
    } else {
      $('#add-item').remove();
      $('#allotment').replaceWith('<div class="alert alert-danger error" role="alert" class="text-center">Please checkout, you have reached your weekly budget!</div>');
    }
  },

  checkout: function(){
    playercart = $('#items-list').html();
    this.$el.empty();
    this.$el.html(HandlebarsTemplates['games/gameStats'](thisGame.attributes))
    $('#cart-list').append(playercart);
    thisGame.attributes.completed = true;
    thisGame.save();
  }

});
