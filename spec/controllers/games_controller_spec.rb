require 'rails_helper'

describe GamesController do
  
  describe 'GET index for games' do
    it 'returns JSON' do
      game = Game.create({income: 400})
      get :index
      expect(response.body).to eq("[#{game.to_json}]")
    end
  end

  describe 'should permit' do
    it { should permit(:income, :household_size, :allotment, :allotment_before, :weekly_allotment, :state_id, :user_id, :completed). for(:create) }
  end
end