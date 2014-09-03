Rails.application.routes.draw do
  
  get '/'               => 'welcome#index', as: 'root'
  get '/snapstories'   =>  'stories#index', as: 'story'
  get '/stories'        => 'stories#list'
  get '/play'           => 'games#play', as: 'play'
  get '/states'         =>  'states#index'
  get '/foods'          =>  'foods#index'

  devise_for :users
  resources :users, :stories, :games

end
