class GamesController < ApplicationController

  def index
    @games = Game.all
    render json: @games
  end

  def play
  end
  
end