class OmniauthCallbacksController < Devise::OmniauthCallbacksController

	def all
		business = Business.from_omniauth(request.env["omniauth.auth"])
		if business.persisted?
			sign_in_and_redirect business, notice: "Great, you're all signed in"
		else
			session["devise.business_attributes"] = business.attributes
			redirect_to new_business_registration_url
		end
	end

	alias_method :twitter, :all
end