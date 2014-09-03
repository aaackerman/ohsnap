require 'rails_helper'

describe StoriesController do
  
  describe 'GET index for stories' do
    it 'returns JSON' do
      story = Story.create!({title: 'Test', content: 'test test', user_id: 3})
      get :list
      expect(response.body).to eq("[#{story.to_json}]")
    end
  end

end