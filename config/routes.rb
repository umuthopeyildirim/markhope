Rails.application.routes.draw do
  resources :sites
  resources :builds
  resources :activities
  post 'login', to: 'authentication#login'
  post 'register', to: 'authentication#register'
end
