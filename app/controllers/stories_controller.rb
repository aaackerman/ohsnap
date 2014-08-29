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
    @story.save
  end

  def update 
    @story = Story.find(params[:id])
    authorize! :update, @story
    @story.update(story_params)
  end

  def destroy
    @story = Story.find(params[:id])
    authorize! :destroy, @story
    @story.destroy
  end

  private
  def story_params
    params.permit(:title, :content, :user_id)
  end
end