Rails.application.routes.draw do
  
  get '/' => 'welcome#index', as: 'root'
  get '/stories' => 'stories#index', as: 'stories' 

  devise_for :users
  resources :users

end
