FactoryGirl.define do
  
  factory :user do
    id 3
    username 'aaackerman'
    first_name 'Alex'
    last_name 'Ackerman'
    email 'ohalex123@gmail.com'
    password 'password'
    password_confirmation 'password'
  end 

  factory :user2 do 
    id 1
    username 'johnnyd'
    first_name 'John'
    last_name 'Dronzek'
    email 'aaackerman@yahoo.com'
    password 'password'
    password_confirmation 'password'
  end 

    factory :nick do
      id 2
      username 'nick9'
      first_name 'Nick'
      last_name 'Cook'
      email 'ackea040@newschool.edu'
      password 'password'
      password_confirmation 'password'
      after(:create) { |nick| nick.confirm! }
    end

  factory :confirmed_user, :parent => :user do
    after(:create) {|user| user.confirm! }
  end

  factory :confirmed_user2, :parent => :nick do
    after(:create) { |nick| nick.confirm! }
  end

end