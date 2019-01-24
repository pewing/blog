Rails.application.routes.draw do

  root to: 'pages#home'

  scope controller: 'pages' do
    get 'home'
    get 'blog'
    get 'about'
    get 'work'
    get 'contact'
    get '/.well-known/acme-challenge/LXnVMZ_cSUCV3wc0sPOD2VS7GvC3WCuWY7_7QOjcPvk' => 'pages#encrypt'
  end

  namespace :rowing do
    get 'home'
    get 'history'
    get 'donate'
    get 'contact'
  end
end
