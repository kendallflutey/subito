class BusinessesController <ApplicationController

	def index
		@businesses = Business.all
	end

	def show
		@business = Business.find(params[:id])
	end

	def new
	end

	def create
		@business = Business.new params[:business]
	    if @business.save
	      redirect_to deals_url
	    else
	      render :new
	   end
	end

	def edit
		@business = Business.find(params[:id])
	end

	def sign_in
	end

end