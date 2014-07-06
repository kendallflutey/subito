class OmniauthCallbacksController < Devise::OmniauthCallbacksController

	def all
		business = Business.from_omniauth(request.env["omniauth.auth"])
	end

	alias_method :twitter, :all
end