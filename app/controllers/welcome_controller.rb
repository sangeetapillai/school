class WelcomeController < ApplicationController
    def index     	
    	contact_details = {}
        file_path = File.join Rails.root, 'public',"contact_details.txt"
        File.open(file_path) do |fp|
          fp.each do |line|
            key, value = line.chomp.split('*')
            contact_details[key] = value
          end
        end
        @phone = contact_details['phone'] 
        @email = contact_details['email'] 
        @facebook = contact_details['facebook'] 
    end

     def loggedinindex     	
    end

    def login
    end

    def register
    end

    def forgotpassword
    end
end