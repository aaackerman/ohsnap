require 'rails_helper'

describe GamesController do
  
  describe 'GET index for games' do
    it 'returns JSON' do
      game = Game.create({income: 400})
      get :index
      expect(response.body).to eq("[#{game.to_json}]")
    end
  end

end