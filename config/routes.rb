Rails.application.routes.draw do
  resources :sites
  resources :builds
  resources :activities
  post 'login', to: 'authentication#login'
  post 'register', to: 'authentication#register'
  get 'user', to: 'sites#get_user'
end
