class GamesController < ApplicationController

  def index
    @games = Game.all
    render json: @games
  end

  def play
  end

  def create
   @game = Game.new(game_params)
   @game.completed = false 
   if @game.save
    render json: @game.to_json, status: 200
    end
  end

  def update
    @game = Game.find(params[:id])
    if @game.update(game_params)
      render json: @game.to_json, status: 200
    end
  end
  
  private 
  def game_params
    params.permit(:income, :household_size, :allotment, :allotment_before, :weekly_allotment, :state_id, :user_id, :completed)
  end
end