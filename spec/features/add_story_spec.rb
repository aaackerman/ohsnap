require 'rails_helper'

# Feature: Create Story
# Story: As a user, I want to be able to add a story so that 
# I can share my experience of SNAP or Oh SNAP

feature 'User can add story', js: true do
  
  scenario 'to story list' do
    visit '/snapstories'
    click_on 'Add Story'
    fill_in 'Title', with: 'Test 123'
    fill_in 'Content', with: 'Content'
    click_on 'Post'
    expect(page).to have_content('Test 123')
  end

end