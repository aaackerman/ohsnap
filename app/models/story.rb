class Story < ActiveRecord::Base

  #One story belongs to one user
  belongs_to :user 

  
end