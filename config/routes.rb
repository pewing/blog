Rails.application.routes.draw do

  root to: 'pages#home'

  scope controller: 'pages' do
    get 'home'
    get 'blog'
    get 'about'
    get 'work'
    get 'contact'
    # get 'cookbook'
  end

  resources :recipes


  # , only: :index

  # scope :cookbook do
  #   resources :recipes
  # end


end
