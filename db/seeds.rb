require 'csv'

User.destroy_all
State.destroy_all
Story.destroy_all
Food.destroy_all 

state_info = CSV.open( File.join( File.dirname(__FILE__),"state_info/SNAP_states.csv"), 'r')
food_prices = CSV.open( File.join( File.dirname(__FILE__),"food_prices/foodprices.csv"), 'r')

state_info.each do |state|
  State.create!({
    state: state[0],
    benefits_2013: state[1],
    benefits_2014: state[2],
    households_2013: state[3],
    households_2014: state[4],
    participants_2013: state[5],
    participants_2014: state[6] })
end 

food_prices.each do |food|
  Food.create!({
    item: food[0],
    price: food[1] })
end

Story.create({
  title: 'Thanks for Playing',
  content: 'Oh SNAP is a “simulator data toy” to see how Food Stamps affect families and children in America. It will allow users to see the amount of SNAP benefits they would have had before the cut and after, which went into effect in 2014, and what the process of shopping for food is like .

    ERD: bit.ly/W8OJ2c

    Trello Board with User Stories: bit.ly/1nV0z7G

    Link to Heroku Deployment: ohsnaptheapp.herokuapp.com

    Technologies Used

    Ruby | Rails

    PostgreSQL

    Handlebars

    Backbone.js

    FactoryGirl

    RSpec | Capybara

    Simplecov

    Devise

    CanCanCan

    Bootstrap

    Animate.css',
      user_id: 3
})
