class State < ActiveRecord::Base

  #One state belongs to a game
  belongs_to :game 

end