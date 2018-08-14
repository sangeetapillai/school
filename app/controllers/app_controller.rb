class AppController < ApplicationController
   
    def login
    	session[:loggedin] = 'student'
    	redirect_to "/welcome/index"
    end

    def home
    	@user = 'student'
    end

    def dashboard
    	@user = 'admin'
    end

    def blog
    	@user = 'student'
    end
end