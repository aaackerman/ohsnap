require 'rails_helper'

# Feature: Create Story
# Story: As a user, I want to be able to add a story so that 
# I can share my experience of SNAP or Oh SNAP

feature 'User navigate to stories page and', js: true do
  
  scenario 'can add story if signed in' do
    user = FactoryGirl.create(:confirmed_user)
    log_in_with(user.email, user.password)
    click_on 'Stories'
    click_on 'Add Story'
    fill_in 'title', with: 'Test 123'
    fill_in 'content', with: 'Content'
    click_button 'Post'
    expect(page).to have_content('Test 123')
  end

  scenario 'cannot add story if not signed in' do
    visit('/snapstories')
    expect(page).to have_no_content('Add Story')
  end

  scenario 'can add story if signed in and delete' do
    user = FactoryGirl.create(:confirmed_user)
    log_in_with(user.email, user.password)
    click_on 'Stories'
    click_on 'Add Story'
    fill_in 'title', with: 'Test 123'
    fill_in 'content', with: 'Content'
    click_button 'Post'
    expect(page).to have_content('Test 123')
    click_on 'Delete'
    expect(page).to have_no_content('Test 123')
  end

end