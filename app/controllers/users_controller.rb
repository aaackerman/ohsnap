class UsersContoller < ApplicationController 

  def show
    @user = User.find(params[:id])
  end

  # def new
  #   @user = User.new
  # end

  # def create
  #   @user = User.new(user_params)
  # end

  # def edit 
  #   @user = User.find(params[:id])
  # end

  # def update
  #   @user = User.find(params[:id])
  # end

  # def destroy
  #   @user = User.find(params[:id])
  #   @user.destroy
  #   redirect_to(root_path)
  # end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :encrypted_password)
  end
end