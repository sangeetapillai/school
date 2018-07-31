class AppController < ApplicationController
   
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