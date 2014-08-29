class Ability
  include CanCan::Ability

  def initialize(user)
    
    can :create, Story

    can :update, Story do |story|
        user == story.user
    end

    can :destroy, Story do |story|
        user == story.user
    end
  end
end
