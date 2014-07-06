class DealsController < ApplicationController

  before_filter :authenticate_business!

	def index
		@deals = Deal.where(business_id: current_business.id)
	end

	def new
    	@deal = Deal.new
  	end

  def create
    @deal = Deal.new(params[:deal])

    if @deal.save
      flash[:notice] = "Deal was successfully created!"
      redirect_to category_path(@deal.category_id)
    else
      p @deal.errors
      render :new
    end
  end

end