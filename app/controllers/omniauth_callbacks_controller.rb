class OmniauthCallbacksController < Devise::OmniauthCallbacksController

	def all
		business = Business.from_omniauth(request.env["omniauth.auth"])
		if business.persisted?
			flash.notice = "Great, you're all signed in"
			sign_in_and_redirect business
		else
			session["devise.business_attributes"] = business.attributes
			redirect_to new_business_registration_url
		end
	end

	alias_method :twitter, :all
	alias_method :facebook, :all

end