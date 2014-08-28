class Game < ActiveRecord::Base

  # A game belongs to a user and has a state 
  belongs_to  :user 
  has_one     :state

end