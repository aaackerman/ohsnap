Rails.application.routes.draw do
  
  get '/' => 'application#index', as: 'root' 

  devise_for :users
  resources :users

end
