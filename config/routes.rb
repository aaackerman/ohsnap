Rails.application.routes.draw do
  
  get '/' => 'welcome#index', as: 'root'
  get '/stories'         => 'stories#list'
  get '/snapstories'    =>  'stories#index'

  devise_for :users
  resources :users, :stories 

end
