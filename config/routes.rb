Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root to: 'pages#home'

  scope controller: 'pages' do
    get 'home'
    get 'blog'
    get 'about'
    get 'work'
    get 'contact'
  end

  resources :recipes


end
