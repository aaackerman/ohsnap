require 'rails_helper'

# Feature: Sign Up
# Story: As a user, I want to sign up for Oh Snap so
# that I can save games and write stories in the app

feature 'User signs up', js: true do
  
  before(:each) do 
    visit root_path
  end

  scenario 'with valid information' do 
    sign_up_with 'kitty', 'cat', 'kitten', 'valid@example.com', 'password'
    expect(page).to have_content('A message with a confirmation link has been sent to your email address.') 
  end

  scenario 'with an invalid email' do
    sign_up_with 'kitty', 'cat', 'kitten', 'not_an_email', 'password'
    expect(page).to have_content('Sign Up')
  end

  scenario 'with no password' do
    sign_up_with 'kitty', 'cat', 'kitten', 'valid@example.com', ''
    expect(page).to have_content("Encrypted password can't be blank")
  end

  scenario 'with no first, last name, or username ' do
    sign_up_with '', '', '', 'valid@example.com', 'password'
    expect(page). to have_content("First name can't be blank")
    expect(page). to have_content("Last name can't be blank")
    expect(page). to have_content("Username can't be blank")
  end

  scenario "and can get confirmation instructions" do
    click_on 'Sign Up'
    click_on "Didn't receive confirmation instructions?"
    expect(page).to have_content("Resend confirmation instructions")
  end

end