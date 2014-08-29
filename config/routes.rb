Rails.application.routes.draw do
  
  get '/' => 'welcome#index', as: 'root'
  get '/storieslist' => 'stories#list'
  get '/stories'    =>  'stories#index'

  devise_for :users
  resources :users

end
