namespace :refresh do 
	desc "Destroys all deals that have expired based on end_time attribute"
	task :destroy_expired_deals => :environment do 
		now = DateTime.now.strftime("%Y-%m-%d %H:%M:%S UTC")
		Deal.where("finish_time < '#{now}'").delete_all
	end
end