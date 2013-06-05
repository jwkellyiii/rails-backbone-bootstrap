Issueviewer::Application.routes.draw do
  resources :issues, :only => [:show, :index]

  match "/page/:id" => "issues#index"

  root :to => 'issues#index'
end
