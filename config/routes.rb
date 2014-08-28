Rails.application.routes.draw do
  
  get '/' => 'welcome#index', as: 'root' 

  devise_for :users
  resources :users

end
