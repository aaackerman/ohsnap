require 'rails_helper'

feature 'Users ', js: true do

  scenario 'can see intro slides on landing page' do
    visit('')
    expect(page).to have_content('Over 45 million Americans')
    find('#intro-1').click
    expect(page).to have_content('The benefits, or Food Stamps')
    find('#intro-2').click
    expect(page).to have_content('In November 2013')
    find('#intro-3').click
    expect(page).to have_content('Months later')
    find('#intro-4').click
    expect(page).to have_content('PLAY')
    find('#play-button').click
    expect(page).to have_content('Where do you live?')
  end

  scenario 'can play game when navigating from home' do
    visit('')
    click_on('Play')
    expect(page).to have_content('Where do you live?')
  end

end