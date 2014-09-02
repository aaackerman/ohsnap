class GamesController < ApplicationController

  def index
    @games = Game.all
    render json: @games
  end

  def play
  end

  def create
   @game = Game.new(game_params)
   if @game.save
    render json: @game.to_json, status: 200
    end
  end
  
  private 
  def game_params
    params.permit(:income, :household_size, :allotment, :state_id, :user_id)
  end
end