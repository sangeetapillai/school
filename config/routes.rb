Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome/index'
  get 'welcome/login'
  get 'welcome/forgotpassword'
  get 'welcome/register'

  get 'app/dashboard'
  get 'app/home'
  get 'app/blog'
end
