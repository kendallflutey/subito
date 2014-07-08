namespace :refresh do 
	desc "Destroys all deals that have expired based on end_time attribute"
	task :destroy_expired_deals => :environment do 
		Deal.where( "finish_time < DateTime.now" ).delete_all
	end
end