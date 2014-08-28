class User < ActiveRecord::Base
  
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :confirmable

  #Users must have the following:
  validates_presence_of :first_name, :last_name, :username, :email, :encrypted_password
  validates_uniqueness_of :username, :email

  #Users have stories and games 
  has_many :games 
  has_many :stories
  
end
