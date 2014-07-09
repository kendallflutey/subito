class DealsController < ApplicationController

  before_filter :authenticate_business!, except: [:index, :show]

	def index
		@deals = Deal.where(business_id: current_business.id)

    # The side affect of getting a list of things should not be creating something new.
    # Your routes should adhere to RESTful conventions.
    # Very bad practice.
    create
	end

	def new
    	@deal = Deal.new
  end

  def create
    @deal = Deal.new(params[:deal])

    if @deal.save
      flash[:notice] = "Your deal was created and will start at: #{@deal.start_time}"
      redirect_to business_deals_path(current_business)
    else
      render :new
    end
  end

end
