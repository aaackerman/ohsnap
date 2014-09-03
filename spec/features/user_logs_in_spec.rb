require 'rails_helper'

# Feature : Log In
# Story: As a user, I want to log in so that I can save 
# Oh Snap games and write stories. 

feature 'User can log in', js: true do

  scenario 'with valid information' do
    user = FactoryGirl.create(:confirmed_user)
    log_in_with(user.email, user.password)
    expect(page).to have_content('Welcome back')
  end

  scenario 'not with invalid password' do
    user = FactoryGirl.create(:confirmed_user)
    log_in_with(user.email, 'wrongpassword')
    expect(page).to have_content('Invalid email or password.')
  end

  scenario 'not with invalid email' do
    user = FactoryGirl.create(:confirmed_user)
    log_in_with('wrongemail@email.com' , user.password)
    expect(page).to have_content('Invalid email or password.')
  end
end
