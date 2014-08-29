require 'csv'

State.destroy_all
Story.destroy_all

state_info = CSV.open( File.join( File.dirname(__FILE__),"state_info/SNAP_states.csv"), 'r')

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

Story.create({
  title: 'Test Story',
  content: 'Test test 123 la la la lorem',
  user_id: 3
})

Story.create({
  title: 'Test Story 2',
  content: 'Test test 123 la la la lorem',
  user_id: 3
})