Rails.application.routes.draw do
  namespace :v1 do
    get 'greetings', to: 'greetings#hello'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Forward all requests to GreetingsController#hello but requests must be non-AJAX (!req.xhr?) and HTML Mime type (req.format.html?).
  # DOES NOT INCLUDE ROOT PATH
 
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  # Defines the root path route ("/")
  root "static#index"
end
