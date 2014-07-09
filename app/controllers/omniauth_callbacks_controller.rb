class OmniauthCallbacksController < Devise::OmniauthCallbacksController

	def twitter_auth
		business = Business.twitter_from_omniauth(request.env["omniauth.auth"])
		if business.persisted?
			flash.notice = "Great, you're all signed in"
			sign_in_and_redirect business
		else
			session["devise.business_attributes"] = business.attributes
			redirect_to new_business_registration_url
		end
	end

	def facebook_auth
		business = Business.facebook_from_omniauth(request.env["omniauth.auth"])
		if business.persisted?
			flash.notice = "Great, you're all signed in"
			sign_in_and_redirect business
		else
			session["devise.business_attributes"] = business.attributes
			redirect_to new_business_registration_url
		end
	end

	alias_method :twitter, :twitter_auth
	alias_method :facebook, :facebook_auth

end