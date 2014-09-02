class StoriesController < ApplicationController

  def index
  end
  
  def list
    @stories = Story.all 
    render json: @stories
  end 

  def create
    @story = Story.new(story_params)
    authorize! :create, @story
    @story.user_id = current_user.id
    if @story.save
      render json: @story.to_json, status: 200
    end
  end

  def update 
    @story = Story.find(params[:id])
    authorize! :update, @story
    if @story.update(story_params)  
      render json: @story.to_json, status: 200
    end
  end

  def destroy
    @story = Story.find(params[:id])
    authorize! :destroy, @story
    if @story.destroy
      render json: @story.to_json, status: 200
    end 
  end

  private
  def story_params
    params.permit(:title, :content, :user_id)
  end
end