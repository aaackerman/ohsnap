class Story < ActiveRecord::Base

  #One story belongs to one user
  belongs_to :user 

  validates_presence_of :user_id, :title, :content

end
