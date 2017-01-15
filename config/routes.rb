Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root 'application#index'

resources :teams, only: [:index, :show, :create, :update, :destroy] do
  resources :awards, only: [:index, :show, :create, :update, :destroy]
end

end
