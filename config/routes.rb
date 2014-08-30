Rails.application.routes.draw do
  
  get '/' => 'welcome#index', as: 'root'
  get '/snapstories'    =>  'stories#index', as: 'story'
  get '/stories'         => 'stories#list'


  devise_for :users
  resources :users, :stories 

end
